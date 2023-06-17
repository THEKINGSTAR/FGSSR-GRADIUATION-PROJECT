import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { JwtAuthService } from 'app/shared/services/auth/jwt-auth.service';
import { DataService } from 'app/shared/services/data.service';

@Component({
  selector: 'app-wizard',
  templateUrl: './wizard.component.html',
  styleUrls: ['./wizard.component.css']
})
export class WizardComponent implements OnInit {
  firstFormGroup: UntypedFormGroup;
  secondFormGroup: UntypedFormGroup;
  ThirdFormGroup: UntypedFormGroup;
  constructor(private fb: UntypedFormBuilder,private Jwtauth: JwtAuthService, private userDate: DataService ) { }

  ngOnInit() {
    this.firstFormGroup = this.fb.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this.fb.group({
      secondCtrl: ['', Validators.required]
    });
    this.ThirdFormGroup = this.fb.group({
      ThirdCtrl: ['', Validators.required]
    });
  }
  
  submit(): void {
    let ressult = {};
    ressult["teamName"] = this.firstFormGroup.value.firstCtrl;
    ressult["TeamTag"]  = this.secondFormGroup.value.secondCtrl;
    ressult["Deacription"] = this.ThirdFormGroup.value.ThirdCtrl;
    ressult["teamLeader"] = this.Jwtauth.decodedToken.unique_name[0];
    this.userDate.createTeam(ressult, this.Jwtauth.decodedToken.unique_name[0]).subscribe((res: any) => { 

    });
  }
}
