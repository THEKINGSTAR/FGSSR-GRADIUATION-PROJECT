import { Component, OnInit, ViewChild } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatProgressBar } from '@angular/material/progress-bar';
import { Validators, UntypedFormGroup, UntypedFormControl } from '@angular/forms';
import {HttpClient } from '@angular/common/http';
import { HomeService } from 'app/services/home.service';
import { Router } from '@angular/router';
import { JwtAuthService } from 'app/shared/services/auth/jwt-auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent implements OnInit {

  @ViewChild(MatProgressBar) progressBar: MatProgressBar;
  @ViewChild(MatButton) submitButton: MatButton;

  Studentdata={name:'',Mobile:'',Email:'',password:''};
  signupForm: UntypedFormGroup;
  constructor( private http: HttpClient,public auth: JwtAuthService,public route: Router) {}

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
    this.submitButton.disabled = true;
    this.progressBar.mode = 'indeterminate';
    var here=this;
this.auth.register(signupData).subscribe(function(res:any){
  console.log(res);
if(res!=null){
  if(res.Status=='400'){
    alert('This Email or user name is already registered');
  }
  else {
    here.route.navigate(['/dashboard/analytics']);
     
  }
}
else{
  alert('please try in another time');
}

});
  }

}
