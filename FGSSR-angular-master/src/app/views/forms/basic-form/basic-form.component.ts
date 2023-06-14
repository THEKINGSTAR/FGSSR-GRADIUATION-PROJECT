import { Component, OnInit } from "@angular/core";
import {
  UntypedFormGroup,
  UntypedFormControl,
  Validators,
} from "@angular/forms";
import { JwtAuthService } from "app/shared/services/auth/jwt-auth.service";
import { DataService } from "app/shared/services/data.service";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-basic-form",
  templateUrl: "./basic-form.component.html",
  styleUrls: ["./basic-form.component.css"],
})
export class BasicFormComponent implements OnInit {
  formData = {};
  basicForm: UntypedFormGroup;
  // userData: any;

  constructor(
    private user: DataService,
    private auth: JwtAuthService,
    private toastr: ToastrService
  ) {}

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
      websit: new UntypedFormControl(""),
      date: new UntypedFormControl(),
      userCode: new UntypedFormControl(""),
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
    // console.log(this.auth.decodedToken.unique_name[1]);
    this.user
      .getUserDataForWizard(this.auth.decodedToken.unique_name[0])
      .subscribe((res: any) => {
        this.basicForm.controls.username.setValue(res.userName);
        this.basicForm.controls.email.setValue(res.email);
        this.basicForm.controls.websit.setValue(res.websit);
        this.basicForm.controls.userCode.setValue(
          this.auth.decodedToken.unique_name[0]
        );
      });
  }

  onSubmit(): void {
    this.user
      .updateUserData(
        this.basicForm.value,
        this.auth.decodedToken.unique_name[0]
      )
      .subscribe((res: any) => {
        this.toastr.success("Data has been saved!");
      });
  }
}
