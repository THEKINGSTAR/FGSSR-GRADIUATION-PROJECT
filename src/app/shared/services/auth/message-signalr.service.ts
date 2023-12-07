import { Injectable } from "@angular/core";
import { environment } from "environments/environment";
import { JwtAuthService } from "./jwt-auth.service";
import { HttpClient } from "@angular/common/http";
import { HubConnection, HubConnectionBuilder } from "@microsoft/signalr";
import { BehaviorSubject, take } from "rxjs";
import { messages } from "app/shared/models/messages";

@Injectable({
  providedIn: "root",
})
export class MessageSignalrService {
  hubUrl = environment.hubUrl;
  baseUrl = environment.apiUrl;
  private hubConnection: HubConnection | undefined;
  public messageThreadSource = new BehaviorSubject<messages[]>([]);
  messageThread$ = this.messageThreadSource.asObservable();
  constructor(private auth: JwtAuthService, private http: HttpClient) {}

  createHubConnection(token): any {
    this.hubConnection = new HubConnectionBuilder()
      .withUrl(this.hubUrl + "message", {
        accessTokenFactory: () => localStorage.getItem('JWT_TOKEN'),
      })
      .withAutomaticReconnect()
      .build();
    this.hubConnection.start().catch((error) => console.log(error));
    // this.hubConnection.on("ReceiveMessageThread", (message) => {
    //   this.messageNumberThreadSource.next(message);
    //   this.messageNumberThread$.pipe(take(1)).subscribe((phoneChat) => {
    //     phoneChat.sort((a, b) => (a.dateSent > b.dateSent ? -1 : 1));
    //     this.messageNumberThreadSource.next([...phoneChat]);
    //   });
    // });
  }

  stopHubConnection(): any {
    if (this.hubConnection) {
      this.messageThreadSource.next([]);
      this.hubConnection.stop();
    }
  }
}
