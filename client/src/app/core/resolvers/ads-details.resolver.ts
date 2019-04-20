import { Injectable } from "@angular/core";
import { Ads } from "../models/ads";
import { Resolve, ActivatedRouteSnapshot } from "@angular/router";
import { AdsService } from "../services/ads.service";
import { Observable } from "rxjs";


@Injectable()
export class AdsDetailsResolver implements Resolve<Ads>{
    
    constructor(private adsService: AdsService) {}

    resolve(route: ActivatedRouteSnapshot){
        const id = route.params['id']
        return this.adsService.getDetails(id)
    }
}
