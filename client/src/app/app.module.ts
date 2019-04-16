import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { SigninComponent } from './authentication/signin/signin.component';
import { SignupComponent } from './authentication/signup/signup.component';
import { HomeComponent } from './home/home.component';
import { DropdownDirective } from './navigation/dropdown.directive';
import { CollapseDirective } from './navigation/collapse.directive';

import { AppRoutingModule } from './app-routing.module';
import { AuthService } from './authentication/auth.service';
import { JwtInterseptorService } from './interseptors/jwt-interseptor.service';
import { AdsMyComponent } from './ads/ads-my/ads-my.component';
import { AdsCreateComponent } from './ads/ads-create/ads-create.component';
import { AdsDetailsComponent } from './ads/ads-details/ads-details.component';
import { ResHadlerInterseptorService } from './interseptors/res-hadler-interseptor.service';
import { AdsEditComponent } from './ads/ads-edit/ads-edit.component';
import { UsersComponent } from './users/users.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    SigninComponent,
    SignupComponent,
    HomeComponent,
    DropdownDirective,
    CollapseDirective,
    AdsMyComponent,
    AdsCreateComponent,
    AdsDetailsComponent,
    AdsEditComponent,
    UsersComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    ToastrModule.forRoot(),
  ],
  providers: [ 
    AuthService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterseptorService, multi: true},
    { provide: HTTP_INTERCEPTORS, useClass: ResHadlerInterseptorService, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
