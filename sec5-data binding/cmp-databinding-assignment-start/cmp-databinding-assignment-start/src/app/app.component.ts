import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  intervalValues: Array<number> = [];
  addNumber(number: number) {
    console.log('number received: ', number);
    this.intervalValues.push(number);
  }

  onClearPressed () {
    console.log('clear pressed');
    this.intervalValues = [];

  }
}
