import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  currentUser:string ='Home!';
  constructor(public auth: AuthService, private sharedService: SharedService) {
 	}
	OnInit() {
	};
	setCurrentUser(){
		if (this.auth.loggedIn) {
			this.currentUser = "Welcome " + this.sharedService.getUserName();
		}
	}
	activeMenu: any =1;
	isActive(menu:any): string {
		if(menu==1) {
			return 'active';
		}
	}
	setMenu(menuId:any): void {
		this.activeMenu=menuId;
		this.setCurrentUser();
	}
	  ngOnInit() {
	  }

}