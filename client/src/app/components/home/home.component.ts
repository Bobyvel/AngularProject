import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Ads } from 'src/app/core/models/ads';
import { AuthService } from 'src/app/core/services/auth.service';
import { AdsService } from 'src/app/core/services/ads.service';
import { tap, catchError } from 'rxjs/operators';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  search;
  ads$: Observable<Ads[]>;
  constructor(public authService: AuthService, private adsService: AdsService) { }

  ngOnInit() {
    this.ads$ = this.adsService.getAll();
 this.search = this.ads$.pipe(
  tap(data => console.log("Anlagenstatus Daten:", data)),
  
)

  }

  deleteAd(id) {
    console.log(id);
    this.adsService.removeAd(id).subscribe(data => {
      console.log(data);
      this.ads$ = this.adsService.getAll();
    });
  }

  
}
