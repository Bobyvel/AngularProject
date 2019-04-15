import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AdsService } from 'src/app/services/ads.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ads-create',
  templateUrl: './ads-create.component.html',
  styleUrls: ['./ads-create.component.css']
})
export class AdsCreateComponent implements OnInit {
  form;
  constructor(private formBild: FormBuilder, private adsService: AdsService, private router: Router) { }

  ngOnInit() {
    this.form = this.formBild.group({
      title: ['', [Validators.required, Validators.minLength(4)]],
      description: ['', [Validators.required, Validators.minLength(10)]],
      price: ['', [Validators.required, Validators.min(0.01)]],
      image: ['', [Validators.required]],
      contact: ['', [Validators.required, Validators.minLength(4)]],


    })
    
  }  

  createNewAds(){
    
    this.adsService.createAds(this.form.value).subscribe(() => {
      this.router.navigate(['/home'])
      
    })
    
  }

  get f(){
    return this.form.controls
  }

  get isAlowed(){
    return this.form.invalid
  }
}
