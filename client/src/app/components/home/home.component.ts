import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Ads } from 'src/app/core/models/ads';
import { AuthService } from 'src/app/core/services/auth.service';
import { AdsService } from 'src/app/core/services/ads.service';
import { tap, catchError, map } from 'rxjs/operators';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  search;
  adsLendPage$: Observable<Ads[]>;
  constructor(public authService: AuthService, private adsService: AdsService) { }

  ngOnInit() {
    this.adsLendPage$ = this.adsService.getAll();
   }

  deleteAd(id) {
    console.log(id);
    this.adsService.removeAd(id).subscribe(data => {
      console.log(data);
      this.adsLendPage$ = this.adsService.getAll();
    });
  }

  name = localStorage.getItem("name");
}
