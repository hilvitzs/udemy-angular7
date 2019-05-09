import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  visible = false;
  dates = [];

  constructor() { }

  ngOnInit() {
  }

  onClick() {
    this.visible = true;
    this.dates.push(Date.now());
  }

  changeColor(i) {
    if (i >= 4) {
      return 'blue';
    }
  }

  getColor(i) {
    if (i >= 4) {
      return 'text-color';
    }
  }

}
