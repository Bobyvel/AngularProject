
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdsMyComponent } from './ads-my/ads-my.component';
import { AdsEditComponent } from './ads-edit/ads-edit.component';
import { AdsDetailsComponent } from './ads-details/ads-details.component';
import { AdsCreateComponent } from './ads-create/ads-create.component';

const adsRoutes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'create', component: AdsCreateComponent},
  { path: 'mine', component: AdsMyComponent},
  { path: 'edit/:id', component: AdsEditComponent},
  { path: 'details/:id', component: AdsDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forChild(adsRoutes)],
  exports: [RouterModule]
})
export class AdsRoutingModule { }
