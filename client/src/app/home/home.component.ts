import { Component, OnInit } from '@angular/core';
import { Ads } from '../models/ads';
import { AdsService } from '../services/ads.service';
import { Observable } from 'rxjs';
import { AuthService } from '../authentication/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  ads$: Observable<Ads[]>;
  constructor(public authService: AuthService, private adsService: AdsService) { }

  ngOnInit() {
    this.ads$ = this.adsService.getAll();
  }

  deleteAd(id) {
    console.log(id);
    this.adsService.removeAd(id).subscribe(data => {
      console.log(data);
      this.ads$ = this.adsService.getAll();
    });
  }
}
