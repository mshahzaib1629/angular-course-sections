import { Component, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-game-control",
  templateUrl: "./game-control.component.html",
  styleUrls: ["./game-control.component.css"],
})
export class GameControlComponent implements OnInit {
  @Output() addNum = new EventEmitter<number>();
  @Output() clearPressed = new EventEmitter();
  constructor() {}

  interval: any;
  lastNumber = 0;

  ngOnInit(): void {}

  onStart() {
    this.interval = setInterval(() => {
      this.addNum.emit(this.lastNumber + 1);
      this.lastNumber++;
    }, 1000);
  }

  onEnd() {
    clearInterval(this.interval);
  }

  onClear() {
    this.lastNumber = 0;
    this.clearPressed.emit();
  }
}
