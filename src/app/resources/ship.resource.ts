import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShipResource {

  constructor( private httpService: HttpClient) { }

  getShips(): Observable<any> {
     return this.httpService.get('https://swapi.co/api/starships/');
  }
}
