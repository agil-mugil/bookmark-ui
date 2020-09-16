import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CardComponent } from './components/card/card.component';
import { RedirectComponent } from './components/redirect/redirect.component';
import { RedirectGuard } from './components/redirect/redirect.guard';
import { GroupComponent} from './components/group/group.component';
import { CreateGroupComponent } from './components/creategroup/create-group.component';
import { AddcardComponent } from './components/addcard/addcard.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AuthGuard} from './services/auth.guard';

const routes: Routes = [{
			path: 'cards',
			component: CardComponent,
    		canActivate: [AuthGuard]
			},
			{path:'cards/:groupId',
			component: CardComponent,
    		canActivate: [AuthGuard]
			},
			{path:'addCard/:groupId/:groupValue',
			component: AddcardComponent,
    		canActivate: [AuthGuard]
			},
			{
			path: 'groups',
			component: GroupComponent,
    		canActivate: [AuthGuard]
			},
			{
			path: 'createGroup',
			component: CreateGroupComponent,
    		canActivate: [AuthGuard]
			},
			{
		    path: 'profile',
		    component: ProfileComponent,
    		canActivate: [AuthGuard]
		 	},
			{
			path: '',
			component: CardComponent,
    		canActivate: [AuthGuard]
			},
			{
			path: '**',
			canActivate: [RedirectGuard],
			component: RedirectComponent
			}
		];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
