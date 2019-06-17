import { Component, OnInit } from '@angular/core';
import { items } from '../mock-items';
import { Item } from '../item';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})



export class OverviewComponent implements OnInit {

  items = items; // Holds current state of items displayed

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
      this.items = items;
      return ;
    }
    let buildItems = [];
    for ( let i = 0; i < items.length; i++ ) {
      if ( this.inItemSet( items[i].name ) && this.inRoomSet( items[i].room ) ) {
        buildItems.push( items[i] );
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

  constructor() { }

  ngOnInit() {
    let itemSetObj = {};
    let roomSetObj = {};

    for ( let i = 0; i < items.length; i++ ) {
      if ( ! itemSetObj[items[i].name] ) {
        this.itemSet.push(items[i].name);
        itemSetObj[items[i].name] = items[i].name;
      }
      if ( ! roomSetObj[items[i].room] ) {
        this.roomSet.push(items[i].room);
        roomSetObj[items[i].room] = items[i].room;
      }
    }

  }

}
