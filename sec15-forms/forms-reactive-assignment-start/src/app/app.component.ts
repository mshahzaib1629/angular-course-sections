import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Observable } from "rxjs";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  assignmentForm: FormGroup;
  projectStatuses = ["Stable", "Critical", "Finished"];

  ngOnInit(): void {
    this.assignmentForm = new FormGroup({
      projectName: new FormControl(
        null,
        [
          Validators.required,
          // this.customValidator,
        ],
        this.customValidatorAsync
      ),
      email: new FormControl(null, [Validators.required, Validators.email]),
      projectStatus: new FormControl(this.projectStatuses[0]),
    });
  }

  onSubmit() {
    console.log("form values: ");
    console.log(this.assignmentForm);
  }

  customValidator(control: FormControl): { [s: string]: boolean } {
    if (control.value === "Test") {
      return { forbiddenName: true };
    } else return null;
  }

  customValidatorAsync(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (control.value === "Test") {
          resolve({ forbiddenName: true });
        } else {
          resolve(null);
        }
      }, 1500);
    });
    return promise;
  }
}
