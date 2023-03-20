import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { DestinationsComponent } from './destinations/destinations.component';
import { FestivalsComponent } from './festivals/festivals.component';
import { HomeComponent } from './home/home.component';
import { LoginRegComponent } from './login-reg/login-reg.component';
import { TravelTipsComponent } from './travel-tips/travel-tips.component';

const routes: Routes = [
  {path:"",component:LoginRegComponent},
  {path:"Login",component:LoginRegComponent},
  {path:"Home",component:HomeComponent},
  {path:"Destinations",component:DestinationsComponent},
  {path:"Festivals",component:FestivalsComponent},
  {path:"TravelTips",component:TravelTipsComponent},
  {path:"Contact",component:ContactComponent},
  {path:"**",component:LoginRegComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
