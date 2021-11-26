import { Component, Input, OnInit, ViewEncapsulation } from "@angular/core";

@Component({
  selector: "app-server-element",
  templateUrl: "./server-element.component.html",
  styleUrls: ["./server-element.component.css"],
  // angular encapsulates all the component and thus its styles defined in css file are r
  // estricted to only that component. But if you want to use styles defined in its css file globally, 
  // you can set ViewEncapsulation.None.
  // Otherwise, ViewEncapsulation.Emulated is default behavior
  encapsulation: ViewEncapsulation.None,
})
export class ServerElementComponent implements OnInit {
  // Alias property binding. We can use an alias in @input() for any property defined in component. 
  // Then we can use that alias for property binding in the template instead of the property name.
  // Otherwise, (in case of empty @Input()), we have to use exact property name in template for property binding
  @Input('srvElement')
  element: { type: string; name: string; content: string };
  constructor() {}

  ngOnInit(): void {}
}
