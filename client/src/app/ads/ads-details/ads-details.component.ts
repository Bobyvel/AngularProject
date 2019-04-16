import { Component, OnInit } from "@angular/core";
import { Ads } from "src/app/models/ads";
import { ActivatedRoute } from "@angular/router";
import { AdsService } from "src/app/services/ads.service";

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
