import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { Ads } from "src/app/core/models/ads";
import { AdsService } from "src/app/core/services/ads.service";


@Component({
  selector: "app-ads-my",
  templateUrl: "./ads-my.component.html",
  styleUrls: ["./ads-my.component.css"]
})
export class AdsMyComponent implements OnInit {
  adsMy$: Observable<Ads[]>;
  constructor(private adsService: AdsService) {}

  ngOnInit() {
    this.adsMy$ = this.adsService.getMyAds();
  }
  deleteAd(id) {
    console.log(id);
    this.adsService.removeAd(id).subscribe(data => {
     
        this.adsMy$ = this.adsService.getMyAds();
      
    });
  }
  
}
