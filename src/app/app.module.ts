import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './Component/app/app.component';
import { AboutUsComponent } from './Component/about-us/about-us.component';
import { ContactComponent } from './Component/contact/contact.component';
import { NavbarComponent } from './Component/navbar/navbar.component';
import {HomeComponent} from "./Component/home/home.component";
import { AboutUSDetailsComponent } from './Component/about-us/about-us-details/about-us-details.component';
import { ShopFormComponent } from './Component/shop-form/shop-form.component';
import {FormsModule} from "@angular/forms";
import { SubscribeComponent } from './Component/subscribe/subscribe.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutUsComponent,
    ContactComponent,
    NavbarComponent,
    HomeComponent,
    AboutUSDetailsComponent,
    ShopFormComponent,
    SubscribeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

