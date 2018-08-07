import { Component, OnInit } from '@angular/core';
import { ShipResource } from '../../resources/ship.resource';

@Component({
  selector: 'app-ship-list',
  templateUrl: './ship-list.component.html',
  styleUrls: ['./ship-list.component.css']
})
export class ShipListComponent implements OnInit {

  public shipList: Array<any>;
  public loading = true;

  constructor(private shipResource: ShipResource) { }

  ngOnInit() {
    this.shipResource.getShips().subscribe( result => {
      this.shipList = result.results;
    }, () => {}, () => {
      this.loading = false;
    });
  }

}
