import { Component, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  constructor() {}

  @ViewChild("myForm") formData: NgForm;

  subscriptions = ["Basic", "Advanced", "Pro"];
  isSubmitted: boolean = false;

  onSubmit() {
    this.isSubmitted = true;
    console.log("data submitted: ", this.formData.form.value);
  }
}
