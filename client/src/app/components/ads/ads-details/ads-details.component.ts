import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Ads } from "src/app/core/models/ads";

@Component({
  selector: "app-ads-details",
  templateUrl: "./ads-details.component.html",
  styleUrls: ["./ads-details.component.css"]
})
export class AdsDetailsComponent implements OnInit {
  ad: Ads;
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.ad = this.route.snapshot.data["adDetails"];
  }
}
