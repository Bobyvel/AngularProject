import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components
import { HomeComponent } from './components/home/home.component';
import { AuthGuard } from './core/guards/auth.guard';
import { AuthGuardAdmin } from './core/guards/auth.guardAdmin';
import { UsersComponent } from './components/users/users.component';



const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  {
    path: 'ads',
    loadChildren: './components/ads/ads.module#AdsModule', canActivate: [AuthGuard]
  },
  {
    path: 'auth',
    loadChildren: './components/authentication/authentication.module#AuthenticationModule'
  },
    
  { path: 'users', component: UsersComponent, canActivate: [AuthGuardAdmin]}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }