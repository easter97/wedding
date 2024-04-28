import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RsvpComponent } from './components/rsvp/rsvp.component';
import { AuthGuard } from './auth/auth.guard';
import { PasswordComponent } from './components/password/password.component';
import { HomeComponent } from './components/home/home.component';
import { ContainerComponent } from './components/container/container.component';

const routes: Routes = [
  { path: '' , redirectTo:'/password', pathMatch:'full'},
  { path: 'password' , component: PasswordComponent},
  { path: 'home', component: ContainerComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
