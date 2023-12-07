import { Component, OnInit } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HomeService } from 'app/services/home.service';
import { isThisHour } from 'date-fns';

@Component({
  selector: 'app-newpage',
  templateUrl: './newpage.component.html',
  styleUrls: ['./newpage.component.scss']
})
export class NewpageComponent implements OnInit {
  isButtonVisible = false;
  isButtonVisibleAI =false;
  selectedItems=[];
  posts:any ; 
  
  constructor(private fb: FormBuilder, public service: HomeService) { }

  ngOnInit(): void {
  }

  submitAT(){
    this.isButtonVisibleAI=true;
    
    var txt='';
    for(var i=0;i<this.selectedItems.length; i++){
     txt+= this.selectedItems[i].item_text;
     if(i!=this.selectedItems.length-1)
        txt+=',';
    }
    
    console.log(txt);
    var itemArr = {
      inputs:txt
    }
    
    console.log(itemArr);
    
     this.service.addSkills(itemArr).subscribe(response => {
      console.log(response);
      this.posts = response.result;
      console.log(response);
     });
    
    }

}


