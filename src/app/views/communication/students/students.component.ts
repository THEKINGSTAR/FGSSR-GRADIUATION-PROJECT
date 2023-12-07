import { Component, OnInit } from "@angular/core";
import { LiveAnnouncer } from "@angular/cdk/a11y";
import { AfterViewInit, ViewChild } from "@angular/core";
import { MatSort, Sort, MatSortModule } from "@angular/material/sort";
import { MatTableDataSource, MatTableModule } from "@angular/material/table";
import { JwtAuthService } from "app/shared/services/auth/jwt-auth.service";
import { DataService } from "app/shared/services/data.service";

@Component({
  selector: "app-students",
  templateUrl: "./students.component.html",
  styleUrls: ["./students.component.scss"],
})
export class StudentsComponent implements OnInit {
  studentData: any;

  constructor(private jwtAuth: JwtAuthService, private userData: DataService) {}

  ngOnInit(): void {
    this.userData
      .studentDataTeamRequest(this.jwtAuth.decodedToken.unique_name[0])
      .subscribe((res: any) => {
        console.log(res);
        this.studentData = res;
      });
  }

  announceSortChange(event): any {}

  onSubmit(userCode): any {
    this.userData
      .addTeamMember(userCode, this.jwtAuth.decodedToken.unique_name[0])
      .subscribe(() => {});
  }
}
