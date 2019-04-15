import { Component, OnInit } from '@angular/core';
import { Ads } from '../models/ads';
import { AdsService } from '../services/ads.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  username : string;
  ads$: Observable<Ads[]>;
  constructor(private adsService: AdsService) { }

  ngOnInit() {
    this.username = localStorage.getItem('name');
    this.ads$ = this.adsService.getAll();
  }
}
