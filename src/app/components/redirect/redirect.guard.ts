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
	if(this.platform.href.indexOf("?code")<0) {
		this.getCard(this.platform.href);
	}
	return false;
  }

	getCard(shortUrl: String){
		this.cardService.getCard(shortUrl).subscribe(
			data => {this.card = data, 
						this.isRedirectionAllowed(this.card);
					},
			err => {
					console.error(err),
					alert("No match found for the given url "+shortUrl)
					},
			() => console.log('Redirected to Original URL')
		);
	}
	isRedirectionAllowed(card:any) {
		
		// if it not belongs to group then check for the expiry and prevent the redirection
		if(card.groupId==null && card.expired==='Y') {
			alert("The given URL is expired");
			return false;
		} else {
			this.redirect(this.card.bookmarkUrl);
		}
		
	}
	redirect(orignalUrl:string) {
		//this.closeWindow();
	 	window.open(orignalUrl, "_self");
	    return false;
	}
	closeWindow() { 
  		window.open('','_parent',''); 
  		window.close(); 
	}
  
}
