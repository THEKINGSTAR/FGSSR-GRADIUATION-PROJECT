import { Routes } from "@angular/router";

import { CommunicationComponent } from "./communication/communication.component";
import { ChatappComponent } from "./chatapp/chatapp.component";
import { SkillsComponent } from "./skills/skills.component";
import { StudentsComponent } from "./students/students.component";
import { TeamMemberComponent } from "./team-member/team-member.component";
import { SourcesComponent } from "./sources/sources.component";
import { TasksComponent } from "./tasks/tasks.component";

export const CommunicationRoutes: Routes = [
  {
    path: "communication",
    component: CommunicationComponent,
    data: { title: "Projects", breadcrumb: "Projects" },
  },
  {
    path: "chat",
    component: ChatappComponent,
    data: { title: "Chat", breadcrumb: "Chat" },
  },
  {
    path: "Skills",
    component: SkillsComponent,
    data: { title: "Skills", breadcrumb: "Skills" },
  },
  {
    path: "Students",
    component: StudentsComponent,
    data: { title: "Team Request", breadcrumb: "Team Request" },
  },
  {
    path: "team",
    component: TeamMemberComponent,
    data: { title: "Team Member", breadcrumb: "Team Member" },
  },
  {
    path: "Sources",
    component: SourcesComponent,
    data: { title: "Sources", breadcrumb: "Sources For Learning" },
  },
  {
    path: "Tasks",
    component: TasksComponent,
    data: { title: "Tasks", breadcrumb: "Team Tasks" },
  },
];
