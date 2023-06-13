import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

// SERVICES
import { ThemeService } from "./services/theme.service";
import { NavigationService } from "./services/navigation.service";
import { RoutePartsService } from "./services/route-parts.service";
import { AuthGuard } from "./guards/auth.guard";
import { UserRoleGuard } from "./guards/user-role.guard";
import { AppConfirmService } from "./services/app-confirm/app-confirm.service";
import { AppLoaderService } from "./services/app-loader/app-loader.service";

import { SharedComponentsModule } from "./components/shared-components.module";
import { SharedPipesModule } from "./pipes/shared-pipes.module";
import { SharedDirectivesModule } from "./directives/shared-directives.module";
import { JwtModule } from "@auth0/angular-jwt";

export function tokenGetterr(): any {
  return localStorage.getItem("JWT_TOKEN");
}

@NgModule({
  imports: [
    CommonModule,
    SharedComponentsModule,
    SharedPipesModule,
    SharedDirectivesModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetterr,
        allowedDomains: ["localhost:5001"],
        disallowedRoutes: ["localhost:5001/auth"],
      },
    }),
  ],
  providers: [
    ThemeService,
    NavigationService,
    RoutePartsService,
    AuthGuard,
    UserRoleGuard,
    AppConfirmService,
    AppLoaderService,
  ],
  exports: [SharedComponentsModule, SharedPipesModule, SharedDirectivesModule],
})
export class SharedModule {}
