import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
	headers: new HttpHeaders({'Content-Type' : 'application/json'})
};
@Injectable({
  providedIn: 'root'
})
export class CardService {

  constructor(private http:HttpClient) { }
	
	getCards() {
		return this.http.get('/server/api/v1/cards');
	}
	getCardsByGroup(groupId: any) {
		return this.http.get('/server/api/v1/cards/cardsByGroup?groupId='+groupId);
	}
	getCard(shortUrl: String){
		return this.http.get('/server/api/v1/cards/cardByShortUrl?shortUrl='+shortUrl);
	}
	createCard(card:any) {
		let body = JSON.stringify(card);
		return this.http.post("/server/api/v1/cards/createCard", body,httpOptions);
	}
	
}
