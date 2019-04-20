import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { Ads } from "src/app/core/models/ads";
import { AuthService } from "src/app/core/services/auth.service";
import { AdsService } from "src/app/core/services/ads.service";
import { tap, catchError, map } from "rxjs/operators";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  adsLendPage$: Observable<Ads[]>;

  constructor(
    public authService: AuthService,
    private adsService: AdsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.adsLendPage$ = this.adsService.getAll();
  }

  deleteAd(id) {
    this.adsService.removeAd(id).subscribe(data => {
      this.adsLendPage$ = this.adsService.getAll();
    });
  }
}
