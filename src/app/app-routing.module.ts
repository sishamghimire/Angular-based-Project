import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./Component/home/home.component";
import {AboutUsComponent} from "./Component/about-us/about-us.component";
import {ContactComponent} from "./Component/contact/contact.component";
import {ShopFormComponent} from "./Component/shop-form/shop-form.component";
import {SubscribeComponent} from "./Component/subscribe/subscribe.component";

const routes: Routes = [
  {path:"", redirectTo:'home' ,pathMatch:"full"},
  {path: "home", component:HomeComponent},
  {path:"aboutUs",component:AboutUsComponent},
  {path:"contact",component:ContactComponent},
  {path:"shop-form",component:ShopFormComponent},
  {path:"subscribe",component:SubscribeComponent},
  {path:"**", redirectTo:'home'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
