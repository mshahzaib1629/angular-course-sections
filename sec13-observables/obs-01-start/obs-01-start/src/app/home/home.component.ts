import { Component, OnDestroy, OnInit } from "@angular/core";
import { Observable, Subscription } from "rxjs";
import { map, filter } from "rxjs/operators";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit, OnDestroy {
  constructor() {}

  firstObsSubscription: Subscription;

  ngOnInit() {
    // defining a custom observable by using Observable.create()
    const customIntervalObservable = Observable.create((observer) => {
      let count = 0;

      setInterval(() => {
        // after every count down, observer.next() will send the updated value of count to subscribers
        observer.next(count);
        if (count > 3) {
          // observer.error cancels the subscription and returns the error to subscribers
          observer.error(new Error("Count is greater than 3"));
        }
        if (count == 5) {
          // observer.complete closes the subscription and subscribers can perform operations on completion
          observer.complete();
        }
        count++;
      }, 1000);
    });

    // defining operators in pipes, these operators will act as a middle layer b/w observer and observable
    const obsWithOperators = customIntervalObservable.pipe(
      // instead of subscribing directly to observable, we can use pipes (with defined operators)
      // to filter, map, OR refine data before reaching to the subscription
      // Pipe can have unlimited operators in it
      filter((data: number) => {
        return data > 0;
      }),
      map((data: number) => {
        return "Round-" + (data + 1);
      })
    );

    // this.firstObsSubscription = this.customIntervalObservable.subscribe(
    this.firstObsSubscription = obsWithOperators.subscribe(
      // handling updates from observable in 1st param of subscribe
      (data) => {
        console.log(data);
      },
      // handle error in 2nd param of subscribe
      (error: Error) => {
        alert(error.message);
      },
      // handling complete event in 3rd param of subscribe
      () => {
        console.log("Completed!");
      }
    );
  }

  ngOnDestroy(): void {
    this.firstObsSubscription.unsubscribe();
  }
}
