import { Routes } from "@angular/router";

import { CommunicationComponent } from "./communication/communication.component";
import { ChatappComponent } from "./chatapp/chatapp.component";

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
  }
];
