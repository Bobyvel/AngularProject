
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdsMyComponent } from './ads-my/ads-my.component';
import { AdsEditComponent } from './ads-edit/ads-edit.component';
import { AdsDetailsComponent } from './ads-details/ads-details.component';
import { AdsCreateComponent } from './ads-create/ads-create.component';
import { AdsDetailsResolver } from 'src/app/core/resolvers/ads-details.resolver';
import { MyAdsResolver } from 'src/app/core/resolvers/ads-my.resolver';

const adsRoutes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'create', component: AdsCreateComponent},
  { path: 'mine', component: AdsMyComponent, resolve: { myAds: MyAdsResolver}},
  { path: 'edit/:id', component: AdsEditComponent},
  { path: 'details/:id', component: AdsDetailsComponent, resolve: { adDetails : AdsDetailsResolver}},
];

@NgModule({
  imports: [RouterModule.forChild(adsRoutes)],
  exports: [RouterModule]
})
export class AdsRoutingModule { }
