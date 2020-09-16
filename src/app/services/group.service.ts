import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SharedService } from './shared.service';


@Injectable({
  providedIn: 'root'
})
export class GroupService {

  constructor(private http:HttpClient, private sharedService: SharedService) { }
	username: string;
	getGroups() {
		this.username = this.sharedService.getUserName();
		const httpOptions = {
			headers: new HttpHeaders({'Content-Type' : 'application/json','username':this.username})
			};
		return this.http.get('/server/api/v1/groups',httpOptions);
	}
	
	getGroupTypes() {
		return this.http.get('/server/api/v1/groups/groupTypes');
	}
	getGroupValues(groupType:string) {
		return this.http.get('/server/api/v1/groups/groupValues?groupType='+groupType);
	}
	createGroup(group:any) {
		let body = JSON.stringify(group);
		this.username = this.sharedService.getUserName();
		const httpOptions = {
			headers: new HttpHeaders({'Content-Type' : 'application/json','username':this.username})
			};
		return this.http.post("/server/api/v1/groups/createGroup", body,httpOptions);
	}
	
	deleteGroupAdmin(groupUserId: number){
		return this.http.delete("/server/api/v1/groupAdmins/deleteGroupAdmin?groupUserId="+groupUserId);
	}
	
	
}
