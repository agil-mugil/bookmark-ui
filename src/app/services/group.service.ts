import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
	headers: new HttpHeaders({'Content-Type' : 'application/json'})
};
@Injectable({
  providedIn: 'root'
})
export class GroupService {

  constructor(private http:HttpClient) { }

	getGroups() {
		return this.http.get('/server/api/v1/groups');
	}
	
	getGroupTypes() {
		return this.http.get('/server/api/v1/groups/groupTypes');
	}
	getGroupValues(groupType:string) {
		return this.http.get('/server/api/v1/groups/groupValues?groupType='+groupType);
	}
	createGroup(group) {
	let body = JSON.stringify(group);
	return this.http.post("/server/api/v1/groups/createGroup", body,httpOptions);
}
}
