import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "environments/environment";

@Injectable({
  providedIn: "root",
})
export class DataService {
  baseUrl: any;
  constructor(private http: HttpClient) {
    this.baseUrl = environment.apiUrl;
  }

  getUserDataForWizard(id: any): any {
    return this.http.get(`${this.baseUrl}User/user/${id}`);
  }

  updateUserData(data: any, usercode): any {
    return this.http.post(
      `${this.baseUrl}user/updateUserData/${usercode}`,
      data
    );
  }

  getTemaMember(userCode): any {
    return this.http.get(`${this.baseUrl}User/teamMember/${userCode}`);
  }

  createTeam(data: any, usercode): any {
    return this.http.post(`${this.baseUrl}user/newTeam/${usercode}`, data);
  }

  studentDataTeamRequest(usercode): any {
    return this.http.get(`${this.baseUrl}User/studentToTeam/${usercode}`);
  }

  addTeamMember(userCode, id): any {
    return this.http.get(`${this.baseUrl}user/addTeamMember/${userCode}/${id}`);
  }

  addProject(projectName, usercode): any {
    console.log(projectName);
    return this.http.get(
      `${this.baseUrl}user/addProject/${projectName}/${usercode}`
    );
  }
}
