import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Ads } from '../models/ads';

const createPath = 'http://localhost:5000/ads/create';
const allPath = 'http://localhost:5000/ads/all';
const myAdsPath = 'http://localhost:5000/ads/mine';
const detailsPath = 'http://localhost:5000/ads/details/';
const delPath = 'http://localhost:5000/ads/delete/';
const editPath = 'http://localhost:5000/ads/edit/';

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

  getDetails(id): Observable<Ads>{
    return this.http.get<Ads>(detailsPath + id)
  }

  removeAd(id){
    console.log(id)
    return this.http.delete(delPath + id)
  }

  editAds(id, data){
    return this.http.put(editPath + id, data)
  }
}
