import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-wizard',
  templateUrl: './wizard.component.html',
  styleUrls: ['./wizard.component.css']
})
export class WizardComponent implements OnInit {
  firstFormGroup: UntypedFormGroup;
  secondFormGroup: UntypedFormGroup;
  ThirdFormGroup: UntypedFormGroup;
  constructor(private fb: UntypedFormBuilder) { }

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
  
  submit() {
    // Add your API
    console.log(this.firstFormGroup.value);
    console.log(this.secondFormGroup.value);
    console.log(this.secondFormGroup.value);
  }
}
