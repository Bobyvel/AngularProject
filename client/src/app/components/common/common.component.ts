import { Component, OnInit, Input } from "@angular/core";
import { Observable } from "rxjs";
import { Ads } from "src/app/core/models/ads";
import { AuthService } from "src/app/core/services/auth.service";
import { AdsService } from "src/app/core/services/ads.service";

@Component({
  selector: "app-common",
  templateUrl: "./common.component.html",
  styleUrls: ["./common.component.css"]
})
export class CommonComponent implements OnInit {
  @Input() ads$: Observable<Ads[]>;
  constructor(
    public authService: AuthService,
    private adsService: AdsService
  ) {}

  ngOnInit() {}

  deleteAd(id) {
    console.log(id);
    this.adsService.removeAd(id).subscribe(data => {
      this.ads$ = this.adsService.getAll();
    });
  }
}
