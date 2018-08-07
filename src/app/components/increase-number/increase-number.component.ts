import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-increase-number',
  templateUrl: './increase-number.component.html',
  styleUrls: ['./increase-number.component.css']
})
export class IncreaseNumberComponent implements OnInit {

  value = 0;

  constructor() { }

  ngOnInit() {
  }

  increase() {
    this.value += 1;
  }

}
