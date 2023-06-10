import { Routes } from "@angular/router";

import { CommunicationComponent } from "./communication/communication.component";
import { ChatappComponent } from "./chatapp/chatapp.component";
import { SkillsComponent } from "./skills/skills.component";
import { StudentsComponent } from "./students/students.component";

export const CommunicationRoutes: Routes = [
  {
    path: "communication",
    component: CommunicationComponent,
    data: { title: 'communication', breadcrumb: 'Connect'}
  },
  {
    path: "chat",
    component: ChatappComponent,
    data: { title: 'Chat', breadcrumb: 'Chat'}
  },
  {
    path: "Skills",
    component: SkillsComponent,
    data: { title: 'Skills', breadcrumb: 'Skills'}
  },
  {
    path: "Students",
    component: StudentsComponent,
    data: { title: 'Students', breadcrumb: 'Students'}
  },
];
