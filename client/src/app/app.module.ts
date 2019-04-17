import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { HomeComponent } from './components/home/home.component';
import { DropdownDirective } from './components/navigation/dropdown.directive';
import { CollapseDirective } from './components/navigation/collapse.directive';
import { UsersComponent } from './components/users/users.component';
import { SigninComponent } from './components/authentication/signin/signin.component';
import { SignupComponent } from './components/authentication/signup/signup.component';

import { AuthService } from './core/services/auth.service';
import { JwtInterseptorService } from './core/interseptors/jwt-interseptor.service';
import { ResHadlerInterseptorService } from './core/interseptors/res-hadler-interseptor.service';
import { SearchComponent } from './components/search/search.component';
import { CommonComponent } from './components/common/common.component';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    SigninComponent,
    SignupComponent,
    HomeComponent,
    DropdownDirective,
    CollapseDirective,
    UsersComponent,
    SearchComponent,
    CommonComponent,
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
