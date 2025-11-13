import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RsvpComponent } from './components/rsvp/rsvp.component';
import { AuthGuard } from './auth/auth.guard';
import { PasswordComponent } from './components/password/password.component';
import { HomeComponent } from './components/home/home.component';
import { ContainerComponent } from './components/container/container.component';
import { GiftListComponent } from './components/gift-list/gift-list.component';
import { WeddingPartyComponent } from './components/wedding-party/wedding-party.component';

const routes: Routes = [
  { path: '*' , redirectTo:'/home', pathMatch:'full'},
  { path: 'registry', component: GiftListComponent},
  { path: 'home', component: ContainerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
