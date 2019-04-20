import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { Ads } from "src/app/core/models/ads";
import { AdsService } from "src/app/core/services/ads.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-ads-my",
  templateUrl: "./ads-my.component.html",
  styleUrls: ["./ads-my.component.css"]
})
export class AdsMyComponent implements OnInit {
  adsMy: Array<Ads>;
  constructor(private adsService: AdsService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.adsMy = this.route.snapshot.data["myAds"];
    //this.adsMy$ = this.adsService.getMyAds();
  }
  deleteAd(id) {
    this.adsService.removeAd(id).subscribe(data => {
      //this.adsMy$ = this.adsService.getMyAds();
    });
  }
}
