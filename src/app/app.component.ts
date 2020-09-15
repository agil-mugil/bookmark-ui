import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Manage Bookmar';
  activeMenu: any =1;
	isActive(menu:any): string {
		if(menu==1) {
			return 'active';
		}
	}
	setMenu(menuId:any): void {
		this.activeMenu=menuId;
	}
}
