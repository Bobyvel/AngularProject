import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components
import { HomeComponent } from './home/home.component';
import { SigninComponent } from './authentication/signin/signin.component';
import { SignupComponent } from './authentication/signup/signup.component';
import { AdsCreateComponent } from './ads/ads-create/ads-create.component';
import { AdsMyComponent } from './ads/ads-my/ads-my.component';
import { AdsDetailsComponent } from './ads/ads-details/ads-details.component';
import { AuthGuard } from './authentication/guards/auth.guard';
import { AdsEditComponent } from './ads/ads-edit/ads-edit.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'ads/create', component: AdsCreateComponent, canActivate: [AuthGuard]},
  { path: 'ads/mine', component: AdsMyComponent, canActivate: [AuthGuard]},
  { path: 'ads/edit/:id', component: AdsEditComponent, canActivate: [AuthGuard]},
  { path: 'ads/details/:id', component: AdsDetailsComponent}
  { path: 'users', component: UsersComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }