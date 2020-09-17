import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SharedService } from './shared.service';

@Injectable({
  providedIn: 'root'
})
export class ShortcutService {

  constructor(private http:HttpClient, 
			  private sharedService: SharedService) { }
	
	username: string;
	
	createShortUrl(bookmarkForm:any) {
		let body = JSON.stringify(bookmarkForm);
		this.username = this.sharedService.getUserName();
		const httpOptions = {
			headers: new HttpHeaders({'Content-Type' : 'application/json','username':this.username})
			};
		return this.http.post("/server/api/v1/bookmarks/createBookmark", body,httpOptions);
	}
	
}
