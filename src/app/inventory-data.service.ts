import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Item } from './item';

@Injectable({
  providedIn: 'root'
})
export class InventoryDataService {

  inventoryDbUrl: string = "https://sfpl-library-inventory.herokuapp.com/api/inventory";

  constructor(
    private http: HttpClient,
  ) { }

  getInventory(): Observable<Item[]> {
    return this.http.get<Item[]>( this.inventoryDbUrl )
      .pipe(
        tap(_=> console.log('fetched inventory')),
      );
  }
}
