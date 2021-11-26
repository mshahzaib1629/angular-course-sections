import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  @Output() startPressed = new EventEmitter();
  @Output() endPressed = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  onStart () {
    this.startPressed.emit();
  }

  onEnd () {
    this.endPressed.emit();
  }

}
