import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContainerComponent } from './components/container/container.component';
import { GiftListComponent } from './components/gift-list/gift-list.component';


const routes: Routes = [
  { path: '**', redirectTo: '/home', pathMatch: 'full' },
  { path: 'registry', component: GiftListComponent},
  { path: 'home', component: ContainerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
