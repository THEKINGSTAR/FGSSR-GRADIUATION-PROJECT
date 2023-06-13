import { Component, OnInit } from "@angular/core";
import {
  UntypedFormGroup,
  UntypedFormControl,
  Validators,
} from "@angular/forms";
import { JwtAuthService } from "app/shared/services/auth/jwt-auth.service";
import { DataService } from "app/shared/services/data.service";

@Component({
  selector: "app-basic-form",
  templateUrl: "./basic-form.component.html",
  styleUrls: ["./basic-form.component.css"],
})
export class BasicFormComponent implements OnInit {
  formData = {};
  basicForm: UntypedFormGroup;
  userData: any;

  constructor(private user: DataService, private auth: JwtAuthService) {}

  ngOnInit() {
    this.getUserData();
    let password = new UntypedFormControl("", Validators.required);
    let confirmPassword = new UntypedFormControl("");

    this.basicForm = new UntypedFormGroup({
      username: new UntypedFormControl("", [
        Validators.minLength(4),
        Validators.maxLength(9),
      ]),
      jobname: new UntypedFormControl("", [Validators.required]),
      email: new UntypedFormControl("", [
        Validators.required,
        Validators.email,
      ]),
      website: new UntypedFormControl(""),
      date: new UntypedFormControl(),
      cardno: new UntypedFormControl(""),
      password: password,
      confirmPassword: confirmPassword,
      gender: new UntypedFormControl(""),
      agreed: new UntypedFormControl("", (control: UntypedFormControl) => {
        const agreed = control.value;
        if (!agreed) {
          return { agreed: true };
        }
        return null;
      }),
    });
  }

  getUserData(): any {
    console.log(this.auth.decodedToken.unique_name[1]);
    this.user
      .getUserDataForWizard(this.auth.decodedToken.unique_name[0])
      .subscribe((res: any) => {
        this.basicForm.controls.username.setValue(res.userName);
        this.basicForm.controls.email.setValue(res.email);
        this.basicForm.controls.website.setValue(res.website);
      });
  }

  onSubmit(): void {
    console.log(this.basicForm.value);
  }
}
