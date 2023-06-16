import { Component, OnInit } from '@angular/core';
 class task{
  taskteam_C:string;
  Description_c:string;
  announcement_c:String;
}
@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})

export class TasksComponent implements OnInit {
  
  taskTeam:any;
  Description:any;
  announcement:any;
   teamt = new task();
    constructor() {
     }
  ngOnInit(): void {
 
  }
  
  onSubmit() {
   if (this.taskTeam==null||this.taskTeam==""){
    alert('Please Enter Task Frist ')
   }else{ 
    console.log(this.taskTeam,this.Description);
    this.taskTeam= this.teamt.taskteam_C;
    this.Description= this.teamt.Description_c;
    return this.taskTeam,this.Description;
   }
  }
  onSubmit2(){
    if (this.announcement==null||this.announcement==""){
      alert('Please Enter Announcement Frist ')
    }
    else{
      console.log(this.announcement);
      this.announcement= this.teamt.announcement_c;
return this.announcement;
    }
  }

}
