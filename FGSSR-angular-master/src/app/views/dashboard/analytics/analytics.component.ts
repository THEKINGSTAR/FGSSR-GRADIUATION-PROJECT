import {
  Component,
  OnInit,
  AfterViewInit,
  ChangeDetectionStrategy,
} from "@angular/core";
import { matxAnimations } from "app/shared/animations/matx-animations";
import { ThemeService } from "app/shared/services/theme.service";
import tinyColor from "tinycolor2";
import PerfectScrollbar from "perfect-scrollbar";
import { Router } from "@angular/router";
import { JwtAuthService } from "app/shared/services/auth/jwt-auth.service";
import { DataService } from "app/shared/services/data.service";

@Component({
  selector: "app-analytics",
  templateUrl: "./analytics.component.html",
  styleUrls: ["./analytics.component.scss"],
  animations: matxAnimations,
})
export class AnalyticsComponent implements OnInit, AfterViewInit {
 
  sessionOptions: any;
  sessions: any;
  sessionsData: any;
  teamNames: any;
  trafficGrowthChart: any;
  bounceRateGrowthChart: any;

  dailyTrafficChartBar: any;
  trafficSourcesChart: any;
  countryTrafficStats: any[];
  doughNutPieOptions: any;
  teamtaskk: any;

  onGoingProjectList: any;

  displayedColumns: string[] = ["name", "price", "available", "action"];

  constructor(
    private themeService: ThemeService,
    public route: Router,
    private jwtAuth: JwtAuthService,
    private userData: DataService
  ) {}

  ngAfterViewInit() {}

  ngOnInit() {
   
   
  }
  TaskLink() {
    this.route.navigate(["/communication/Tasks"]);
  }
  ResourceLink() {
    this.route.navigate(["/communication/Sources"]);
  }
  TeamtLink() {
    this.route.navigate(["forms/wizard"]);
  }
  skillsLink() {
    this.route.navigate(["/communication/Skills"]);
  }
  StudentLink() {
    this.route.navigate(["/communication/Students"]);
  }
  ProjectLink() {
    this.route.navigate(["/communication/communication"]);
  }
 
  getTeamName(): any {
    this.userData
      .getTeamName(this.jwtAuth.decodedToken.unique_name[0])
      .subscribe((res) => {
        if(res.values==null||res.values==undefined){
           this.teamNames= 'No Team add';
        }
        else{
          console.log('ed',res);
          this.teamNames = res;
        }
        
      });
  }

  getTasks(): any {
    this.userData
      .getTeamTasks(this.jwtAuth.decodedToken.unique_name[0])
      .subscribe((res1:any) => {
        console.log(res1);
        this.onGoingProjectList = res1;
      });
  }
}
