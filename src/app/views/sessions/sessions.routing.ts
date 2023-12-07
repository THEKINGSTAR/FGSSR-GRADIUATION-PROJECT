import { Routes } from "@angular/router";

import { SigninComponent } from "./signin/signin.component";
import { SignupComponent } from "./signup/signup.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import { HomePageComponent } from "./home-Page/home-Page.component";
export const SessionsRoutes: Routes = [
  {
    path: "",
    
    children: [
      {
        path: "home-Page",
        component: HomePageComponent,
        data: { title: "Home" }
      },{
        path: "signup",
        component: SignupComponent,
        data: { title: "Signup" }
      },
      {
        path: "signin",
        component: SigninComponent,
        data: { title: "Signin" }
      },
      {
        path: "404",
        component: NotFoundComponent,
        data: { title: "Not Found" }
      }
    ]
  }
];
