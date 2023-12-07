import { Component, OnInit, AfterViewInit } from "@angular/core";
import { Title } from "@angular/platform-browser";
import { Router, NavigationEnd, ActivatedRoute } from "@angular/router";

import { RoutePartsService } from "./shared/services/route-parts.service";

import { filter } from "rxjs/operators";
import { UILibIconService } from "./shared/services/ui-lib-icon.service";
import { LayoutService } from "./shared/services/layout.service";
import { JwtHelperService } from "@auth0/angular-jwt";
import { AuthService } from "./shared/services/auth.service";
import { JwtAuthService } from "./shared/services/auth/jwt-auth.service";
import { MessageSignalrService } from "./shared/services/auth/message-signalr.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit, AfterViewInit {
  appTitle = "FGSSR Project";
  pageTitle = "";
  jwtHelper = new JwtHelperService();
  constructor(
    public title: Title,
    private router: Router,
    private activeRoute: ActivatedRoute,
    private routePartsService: RoutePartsService,
    private iconService: UILibIconService,
    private layoutService: LayoutService,
    private authService: JwtAuthService,
    private message: MessageSignalrService
  ) {
    iconService.init();
  }

  ngOnInit() {
    this.changePageTitle();
    const token = localStorage.getItem("JWT_TOKEN");
    this.authService.decodedToken = this.jwtHelper.decodeToken(token);
    if (token) {
      this.message.createHubConnection(this.authService.token);
    }
    // console.log(this.jwtHelper.decodeToken(token));
  }

  ngAfterViewInit() {}

  changePageTitle() {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((routeChange) => {
        const routeParts = this.routePartsService.generateRouteParts(
          this.activeRoute.snapshot
        );
        if (!routeParts.length) {
          return this.title.setTitle(this.appTitle);
        }
        // Extract title from parts;
        this.pageTitle = routeParts
          .reverse()
          .map((part) => part.title)
          .reduce((partA, partI) => {
            return `${partA} > ${partI}`;
          });
        this.pageTitle += ` | ${this.appTitle}`;
        this.title.setTitle(this.pageTitle);
      });
  }

  // loadCurrentUser(usercode, token: string): any {
  //   this.authService.loadCurrentUser(usercode, token).subscribe((res: any) => {
  //     this.authService.setUserAndToken(res.token, res, true);
  //     // console.log(res);
  //   });
  // }
}
