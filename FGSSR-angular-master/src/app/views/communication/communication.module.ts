import { SharedMaterialModule } from "app/shared/shared-material.module";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { FlexLayoutModule } from "@angular/flex-layout";
import { NgChartsModule } from "ng2-charts";
import { NgxEchartsModule } from "ngx-echarts";
import { SharedPipesModule } from "app/shared/pipes/shared-pipes.module";
import { CommunicationComponent } from "./communication/communication.component";
import { CommunicationRoutes } from "./communication.routing";
import { FormsModule } from "@angular/forms";
import { ChatappComponent } from './chatapp/chatapp.component';
import { SkillsComponent } from './skills/skills.component';

@NgModule({
  imports: [
    CommonModule,
    SharedMaterialModule,
    FlexLayoutModule,
    NgChartsModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts')
    }),
    SharedPipesModule,
    FormsModule,
    RouterModule.forChild(CommunicationRoutes)
  ],
  declarations: [CommunicationComponent, ChatappComponent, SkillsComponent],
  exports: []
})
export class CommunicationModule {}
