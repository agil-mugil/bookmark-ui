import { Injectable } from '@angular/core';
import { CanActivate, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { CardService } from '../../services/card.service';
import {PlatformLocation } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class RedirectGuard implements CanActivate {
  constructor(private cardService: CardService, private platform: PlatformLocation) { }

   card:any;
  canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
	this.getCard(this.platform.href);
	return false;
  }

	getCard(shortUrl: String){
		this.cardService.getCard(shortUrl).subscribe(
			data => {this.card = data, this.redirect(this.card.bookmarkUrl)},
			err => console.error(err),
			() => console.log('Cards Loaded')
		);
	}
	
	redirect(orignalUrl:string) {
		window.close();
	 	window.open(orignalUrl, "_blank");
	    return false;
	}
  
}
