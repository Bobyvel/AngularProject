import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Ads } from '../models/ads';

const createPath = 'http://localhost:5000/ads/create';
const allPath = 'http://localhost:5000/ads/all';
const myAdsPath = 'http://localhost:5000/ads/mine';

@Injectable({
  providedIn: 'root'
})
export class AdsService {

  constructor(private http: HttpClient) { }

  createAds(data){
    
    return this.http.post(createPath, data);
    
  }
  getAll(): Observable<Ads[]>{
    return this.http.get<Ads[]>(allPath)
  }

  getMyAds(): Observable<Ads[]>{
    return this.http.get<Ads[]>(myAdsPath)
  }
}
