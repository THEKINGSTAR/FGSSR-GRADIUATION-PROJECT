import { Component, OnInit } from "@angular/core";
import { JwtAuthService } from "app/shared/services/auth/jwt-auth.service";
import { DataService } from "app/shared/services/data.service";

@Component({
  selector: "app-team-member",
  templateUrl: "./team-member.component.html",
  styleUrls: ["./team-member.component.scss"],
})
export class TeamMemberComponent implements OnInit {
  users: any;
  constructor(private Jwtauth: JwtAuthService, private userData: DataService) {}

  ngOnInit() {
    this.temaMember();
  }

  temaMember(): any {
    this.users = [];
    this.userData
      .getTemaMember(this.Jwtauth.decodedToken.unique_name[0])
      .subscribe((res: any) => {
        this.users = res;
      });
  }
}
