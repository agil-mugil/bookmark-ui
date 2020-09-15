import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CardComponent } from './components/card/card.component';
import { RedirectComponent } from './components/redirect/redirect.component';
import { RedirectGuard } from './components/redirect/redirect.guard';
import { GroupComponent} from './components/group/group.component';
import { CreateGroupComponent } from './components/creategroup/create-group.component';
import { AddcardComponent } from './components/addcard/addcard.component';

const routes: Routes = [{
			path: 'cards',
			component: CardComponent
			},
			{path:'cards/:groupId',
			component: CardComponent
			},
			{path:'addCard/:groupId/:groupValue',
			component: AddcardComponent
			},
			{
			path: 'groups',
			component: GroupComponent
			},
			{
			path: 'createGroup',
			component: CreateGroupComponent
			},
			{
			path: '',
			component: CardComponent
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
