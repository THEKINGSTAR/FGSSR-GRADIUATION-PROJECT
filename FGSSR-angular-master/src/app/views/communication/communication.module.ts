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
import { ChatappComponent } from "./chatapp/chatapp.component";
import { SkillsComponent } from "./skills/skills.component";
import { ReactiveFormsModule } from "@angular/forms";
import { NgMultiSelectDropDownModule } from "ng-multiselect-dropdown";
import { StudentsComponent } from "./students/students.component";
import { MatSort, Sort, MatSortModule } from "@angular/material/sort";
import { MatTableDataSource, MatTableModule } from "@angular/material/table";
import { TeamMemberComponent } from './team-member/team-member.component';
@NgModule({
  imports: [
    NgMultiSelectDropDownModule.forRoot(),
    CommonModule,
    SharedMaterialModule,
    FlexLayoutModule,
    NgChartsModule,
    MatTableModule,
    MatSortModule,

    NgxEchartsModule.forRoot({
      echarts: () => import("echarts"),
    }),
    SharedPipesModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(CommunicationRoutes),
  ],
  declarations: [
    CommunicationComponent,
    ChatappComponent,
    SkillsComponent,
    StudentsComponent,
    TeamMemberComponent,
  ],
  exports: [],
})
export class CommunicationModule {}
