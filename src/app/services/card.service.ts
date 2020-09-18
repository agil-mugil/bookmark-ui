import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SharedService } from './shared.service';
const httpOptions = {
	headers: new HttpHeaders({'Content-Type' : 'application/json'})
	
};
@Injectable({
  providedIn: 'root'
})
export class CardService {

  constructor(private http:HttpClient, private sharedService: SharedService) { }
	
	username: string;
	getCards() {
		return this.http.get('/server/api/v1/cards');
	}
	getCardsByGroup(groupId: any) {
		this.username = this.sharedService.getUserName();
		const httpOptions = {
			headers: new HttpHeaders({'Content-Type' : 'application/json','username':this.username})
			};
		return this.http.get('/server/api/v1/cards/cardsByGroup?groupId='+groupId,httpOptions);
	}
	getCard(shortUrl: String){
		return this.http.get('/server/api/v1/cards/cardByShortUrl?shortUrl='+shortUrl);
	}
	createCard(card:any) {
		let body = JSON.stringify(card);
		this.username = this.sharedService.getUserName();
		const httpOptions = {
			headers: new HttpHeaders({'Content-Type' : 'application/json','username':this.username})
			};
		return this.http.post("/server/api/v1/cards/createCard", body,httpOptions);
	}
	publishCard(cardId: number) {
		let body = JSON.stringify(cardId);
		this.username = this.sharedService.getUserName();
		const httpOptions = {
			headers: new HttpHeaders({'Content-Type' : 'application/json','username':this.username})
			};
		return this.http.post("/server/api/v1/cards/publishCard", body,httpOptions);
	}
	getCountOfGroupAdmin(groupId: number) {
		this.username = this.sharedService.getUserName();
		const httpOptions = {
			headers: new HttpHeaders({'Content-Type' : 'application/json','username':this.username})
			};
	return this.http.get('/server/api/v1/groupAdmins/groupAdminCount?groupId='+groupId,httpOptions);
	}
	deleteCard(cardId: number) {
		return this.http.delete("/server/api/v1/cards/deleteCard?cardId="+cardId);
	}
	
}
