import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardService } from './services/card.service';
import { CardComponent } from './components/card/card.component';
import { RedirectComponent } from './components/redirect/redirect.component';
import { GroupComponent } from './components/group/group.component';
import { CreateGroupComponent } from './components/creategroup/create-group.component';
import { AddcardComponent } from './components/addcard/addcard.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { ProfileComponent } from './components/profile/profile.component';
import { BookmarkCardComponent } from './components/bookmark-card/bookmark-card.component';
import { CallbackComponent } from './components/callback/callback.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    RedirectComponent,
    GroupComponent,
    CreateGroupComponent,
    AddcardComponent,
    NavBarComponent,
    ProfileComponent,
    BookmarkCardComponent,
    CallbackComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
	HttpClientModule,
	ReactiveFormsModule
  ],
  providers: [CardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
