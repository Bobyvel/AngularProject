import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { AdsService } from 'src/app/services/ads.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Ads } from 'src/app/models/ads';

@Component({
  selector: 'app-ads-edit',
  templateUrl: './ads-edit.component.html',
  styleUrls: ['./ads-edit.component.css']
})
export class AdsEditComponent implements OnInit {
  form: FormGroup;
  id: string;
  constructor(private route: ActivatedRoute, private formBild: FormBuilder, private adsService: AdsService, private router: Router) { }

  ngOnInit() {
    this.form = this.formBild.group({
      title: ['', [Validators.required, Validators.minLength(4)]],
      description: ['', [Validators.required, Validators.minLength(10)]],
      price: ['', [Validators.required, Validators.min(0.01)]],
      image: ['', [Validators.required]],
      contact: ['', [Validators.required, Validators.minLength(4)]],
    })

    this.route.params.subscribe(data => {
      let id = data["id"];
      this.id = id;
      this.adsService.getDetails(id).subscribe(res => {
        console.log(res)
        this.form.patchValue({...res});
        console.log(this.form)
      });
    });
    
  }  

  createNewAds(){
    
    this.adsService.editAds(this.id, this.form.value).subscribe(() => {
      this.router.navigate(['ads/mine'])
      
    })
    
  }

  get f(){
    return this.form.controls
  }

  get isAlowed(){
    return this.form.invalid
  }
}

