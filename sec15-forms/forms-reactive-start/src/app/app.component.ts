import { Component, OnInit } from "@angular/core";
import { FormArray, FormControl, FormGroup, Validators } from "@angular/forms";
import { Observable } from "rxjs";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  genders = ["male", "female"];
  signupForm: FormGroup;

  forbiddenNames = ["Alpha", "Beta"];

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.signupForm = new FormGroup({
      // userData is used as a Group of info, we've to use it as a nested FormGroup
      userData: new FormGroup({
        // we can add defalut value for targeted field by passing it to FormControl constructor
        username: new FormControl(null, [
          Validators.required,
          this.customValidator.bind(this),
        ]),
        email: new FormControl(
          null,
          [Validators.required, Validators.email],
          this.customAsyncValidator
        ),
      }),
      gender: new FormControl("male"),
      // FormArray contains the array of FormControls
      hobbies: new FormArray([]),
    });

    // we have statusChanges & valueChanges observables in formGroup which we can use for reactive updates based on various stages
    this.signupForm.statusChanges.subscribe((value) => {
      console.log(value);
    });
  }

  submit() {
    console.log(this.signupForm);
  }

  onAddHobby() {
    console.log("add hobby clicked!");
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.signupForm.get("hobbies")).push(control);
  }

  getHobbies() {
    return (<FormArray>this.signupForm.get("hobbies")).controls;
  }

  // this func has a return type of JS object, where key is in string format
  customValidator(control: FormControl): { [s: string]: boolean } {
    if (this.forbiddenNames.indexOf(control.value) !== -1)
      return { forbiddenName: true };
    return null;
  }

  customAsyncValidator(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (control.value === "test@test.com") {
          resolve({ forbiddenEmail: true });
        } else {
          resolve(null);
        }
      }, 1500);
    });
    return promise;
  }
}
