import { Component, OnInit } from "@angular/core";
import { JwtAuthService } from "app/shared/services/auth/jwt-auth.service";
import { DataService } from "app/shared/services/data.service";
class task {
  taskteam_C: string;
  Description_c: string;
  announcement_c: String;
}
@Component({
  selector: "app-tasks",
  templateUrl: "./tasks.component.html",
  styleUrls: ["./tasks.component.scss"],
})
export class TasksComponent implements OnInit {
  taskTeam: any;
  Description: any;
  announcement: any;
  teamt = new task();
  constructor(private userData: DataService, private jwtAuth: JwtAuthService) {}
  ngOnInit(): void {}

  onSubmit() {
    if (this.taskTeam == null || this.taskTeam == "") {
      alert("Please Enter Task Frist ");
    } else {
      console.log(this.taskTeam, this.Description);
      // this.taskTeam = this.teamt.taskteam_C;
      // this.Description = this.teamt.Description_c;
      const task: any = {};
      task.taskName = this.taskTeam;
      task.description = this.Description;
      console.log(task);
      this.userData
        .createTask(task, this.jwtAuth.decodedToken.unique_name[0])
        .subscribe(() => {
          alert("Task has been saved!");
        });
    }
  }
  onSubmit2() {
    if (this.announcement == null || this.announcement == "") {
      alert("Please Enter Announcement Frist ");
    } else {
      console.log(this.announcement);
      this.announcement = this.teamt.announcement_c;
      return this.announcement;
    }
  }
}
