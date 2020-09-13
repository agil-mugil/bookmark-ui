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
	getCard(shortUrl: String){
		return this.http.get('/server/api/v1/cards/cardByShortUrl?shortUrl='+shortUrl);
	}
}
