import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment3',
  templateUrl: './assignment3.component.html',
  styleUrls: ['./assignment3.component.css']
})
export class Assignment3Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  itemList = [];

  showText = false;

  onButtonClicked(): void {
    this.showText = !this.showText;
    this.itemList.push({'count': this.itemList.length+1, 'time': Date()});
  }

}
