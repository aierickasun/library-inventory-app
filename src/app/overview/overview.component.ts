import { Component, OnInit } from '@angular/core';
// import { items } from '../mock-items';
import { Item } from '../item';
import { InventoryDataService } from '../inventory-data.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})



export class OverviewComponent implements OnInit {

  persistItems: any;

  items : any;  // Holds current state of items displayed

  itemSet: any = [];

  roomSet: any = [];

  filterSet: any = {
    itemsSet: [],
    roomsSet: []
  };

  handleItemFilterClick( filterName: string ) {
    let node = (<HTMLInputElement>document.getElementById( filterName ));
    console.log( node );
    if ( node.checked ) {
      this.filterSet.itemsSet.push( filterName );
    } else {
      this.filterSet.itemsSet.splice( this.filterSet.itemsSet.indexOf(filterName), 1 );
    }
  }

  handleRoomFilterClick( filterName: string ) {
    let node = (<HTMLInputElement>document.getElementById( filterName ));
    console.log( node );
    if ( node.checked ) {
      console.log("Checked");
      this.filterSet.roomsSet.push( filterName );
    } else {
      console.log("NOt checked");
      this.filterSet.roomsSet.splice( this.filterSet.roomsSet.indexOf(filterName), 1 );
    }
  }

  apply() {
    this.renderItemView();
  }

  renderItemView() {
    console.log( "Rendering item view on ");
    console.log( this.filterSet );
    let itemSet = this.filterSet.itemsSet;
    let roomSet = this.filterSet.roomsSet;
    if ( this.filterSet.itemsSet.length == 0 && this.filterSet.roomsSet.length == 0 ) {
      console.log("Show everything");
      this.items = this.persistItems;
      return ;
    }
    let buildItems = [];
    for ( let i = 0; i < this.persistItems.length; i++ ) {
      if ( this.inItemSet( this.persistItems[i].name ) && this.inRoomSet( this.persistItems[i].room ) ) {
        buildItems.push( this.persistItems[i] );
      }
    }
    console.log("Resulting set is");
    console.log( buildItems );
    this.items = buildItems;
  }

  inItemSet ( itemName : string ) {
    let itemSet = this.filterSet.itemsSet;
    if ( itemSet.length == 0 ) {
      return true;
    }
    if ( itemSet.indexOf( itemName ) == -1 ){
      return false;
    }
    return true;
  }

  inRoomSet ( roomName : string ) {
    let roomSet = this.filterSet.roomsSet;
    if ( roomSet.length == 0 ) {
      return true;
    }
    if ( roomSet.indexOf( roomName ) == -1 ){
      return false;
    }
    return true;
  }

  getInventory(): void {
    this.inventoryDataService.getInventory()
      .subscribe( inventory => {
        this.persistItems = inventory;
        this.items = inventory;
        let itemSetObj = {};
        let roomSetObj = {};

        for ( let i = 0; i < this.persistItems.length; i++ ) {
          if ( ! itemSetObj[this.persistItems[i].name] ) {
            this.itemSet.push(this.persistItems[i].name);
            itemSetObj[this.persistItems[i].name] = this.persistItems[i].name;
          }
          if ( ! roomSetObj[this.persistItems[i].room] ) {
            this.roomSet.push(this.persistItems[i].room);
            roomSetObj[this.persistItems[i].room] = this.persistItems[i].room;
          }
        }
      });
  }

  constructor(
    private inventoryDataService: InventoryDataService
  ) { }

  ngOnInit() {
    this.getInventory();
  }

}
