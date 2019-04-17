import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { AdsService } from "src/app/core/services/ads.service";
import { Ads } from "src/app/core/models/ads";


@Component({
  selector: "app-ads-details",
  templateUrl: "./ads-details.component.html",
  styleUrls: ["./ads-details.component.css"]
})
export class AdsDetailsComponent implements OnInit {
  ad: Ads;
  constructor(private route: ActivatedRoute, private adsService: AdsService) {}

  ngOnInit() {
    this.route.params.subscribe(data => {
      let id = data["id"];
      this.adsService.getDetails(id).subscribe(data => {
        this.ad = data;
        console.log(this.ad)
      });
    });
  }
}
