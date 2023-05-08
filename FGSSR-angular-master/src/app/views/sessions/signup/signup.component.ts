import { Component, OnInit, ViewChild } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatProgressBar } from '@angular/material/progress-bar';
import { Validators, UntypedFormGroup, UntypedFormControl } from '@angular/forms';
import {HttpClient } from '@angular/common/http';
import { HomeService } from 'app/services/home.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent implements OnInit {

  @ViewChild(MatProgressBar) progressBar: MatProgressBar;
  @ViewChild(MatButton) submitButton: MatButton;

  data={name:'',Mobile:'',Email:'',password:''};
  signupForm: UntypedFormGroup
  constructor( private http: HttpClient,public student:HomeService) {}

  ngOnInit() {
    const password = new UntypedFormControl('', Validators.required);

    this.signupForm = new UntypedFormGroup({
      username : new UntypedFormControl('',[Validators.required,Validators.maxLength(50)]),
      PhoneNumber: new UntypedFormControl('',[Validators.required,Validators.maxLength(11),Validators.minLength(11)]),
      Email : new UntypedFormControl('', [Validators.required, Validators.email]),
      password : password,
      agreed: new UntypedFormControl('', (control: UntypedFormControl) => {
        const agreed = control.value;
        if(!agreed) {
          return { agreed: true }
        }
        return null;
      })
    })
  }

  signup() {
    const signupData = this.signupForm.value;
    console.log(signupData);

    this.submitButton.disabled = true;
    this.progressBar.mode = 'indeterminate';
this.student.addStudent(signupData).subscribe(function(d:any){
console.log(d);
});
  }

}
