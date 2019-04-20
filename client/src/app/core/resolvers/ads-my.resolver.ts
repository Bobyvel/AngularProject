import { Injectable } from "@angular/core";
import { Ads } from "../models/ads";
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { AdsService } from "../services/ads.service";
import { Observable } from "rxjs";


@Injectable()
export class MyAdsResolver implements Resolve<Observable<Ads[]>>{
    
    constructor(private adsService: AdsService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Ads[]>{
        
        return this.adsService.getMyAds();
    }
}
