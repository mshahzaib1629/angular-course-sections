import { Component, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  @ViewChild("f") viewChildForm: NgForm;

  genders = ["male", "female"];
  defaultSelectValue = "pet";
  answer = "";
  user = {
    username: "",
    email: "",
    secretQuestion: "",
    answer: "",
    gender: "",
  };
  isSubmitted = false;

  // accessing form via passing form's tag name as parameter to submit function
  // submit(form: NgForm) {
  // console.log(form);
  // }

  // accesssing form via @ViewChild
  submit() {
    console.log(this.viewChildForm);
    this.user.username = this.viewChildForm.form.value.userData.username;
    this.user.email = this.viewChildForm.form.value.userData.email;
    this.user.secretQuestion = this.viewChildForm.form.value.secret;
    this.user.answer = this.viewChildForm.form.value.questionAnswer;
    this.user.gender = this.viewChildForm.form.value.gender;

    this.isSubmitted = true;
    // this approach can be used to reset the field values.
    // We can also use setValue() to set some new values to these fields
    this.viewChildForm.reset();
  }
  suggestUserName() {
    const suggestedName = "Superuser";
    this.viewChildForm.form.patchValue({
      userData: { username: suggestedName },
    });
  }
}
