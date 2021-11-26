import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  intervalValues: Array<number> = [];
  interval;
  onStartPressed() {
    console.log('start button pressed');
    this.interval = setInterval(() => {
      this.intervalValues.push(this.intervalValues.length + 1);
      console.log(this.intervalValues.length);
    }, 1000);
  }

  onEndPressed () {
    clearInterval(this.interval);
    this.intervalValues = [];
    console.log('end button pressed');

  }
}
