import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { Ads } from "src/app/models/ads";
import { AdsService } from "src/app/services/ads.service";

@Component({
  selector: "app-ads-my",
  templateUrl: "./ads-my.component.html",
  styleUrls: ["./ads-my.component.css"]
})
export class AdsMyComponent implements OnInit {
  ads$: Observable<Ads[]>;
  constructor(private adsService: AdsService) {}

  ngOnInit() {
    this.ads$ = this.adsService.getMyAds();
  }

  deleteAd(id) {
    console.log(id);
    this.adsService.removeAd(id).subscribe(data => {
      console.log(data);
      this.ads$ = this.adsService.getMyAds();
    });
  }
}
