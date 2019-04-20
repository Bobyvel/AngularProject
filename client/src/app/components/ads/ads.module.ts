// Decorators
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';



import { AdsMyComponent } from './ads-my/ads-my.component';
import { AdsCreateComponent } from './ads-create/ads-create.component';
import { AdsDetailsComponent } from './ads-details/ads-details.component';
import { AdsEditComponent } from './ads-edit/ads-edit.component';
import { AdsService } from 'src/app/core/services/ads.service';
import { AdsRoutingModule } from './ads-routing.module';
import { AdsDetailsResolver } from 'src/app/core/resolvers/ads-details.resolver';
import { MyAdsResolver } from 'src/app/core/resolvers/ads-my.resolver';

@NgModule({
  declarations: [
    AdsMyComponent,
    AdsCreateComponent,
    AdsDetailsComponent,
    AdsEditComponent,
    
  ],
  imports: [
    CommonModule,
    AdsRoutingModule,
    ReactiveFormsModule,
       
 
  ],
  providers: [ 
  AdsService,
  AdsDetailsResolver,
  MyAdsResolver
  ],
})
export class AdsModule { }
