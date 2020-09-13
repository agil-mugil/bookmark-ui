import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CardComponent } from './components/card/card.component';
import { RedirectComponent } from './components/redirect/redirect.component';
import { RedirectGuard } from './components/redirect/redirect.guard';

const routes: Routes = [{
			path: 'cards',
			component: CardComponent
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
