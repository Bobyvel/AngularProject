import { Component, OnInit, Input} from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "src/app/core/services/auth.service";


@Component({
  selector: "app-navigation",
  templateUrl: "./navigation.component.html",
  styleUrls: ["./navigation.component.css"]
})
export class NavigationComponent implements OnInit {
  
  constructor(public authService: AuthService, private router: Router) {}

  ngOnInit() {
    
  }
  
  

  logout() {
    this.authService.logout();
    localStorage.clear();
    this.router.navigate(["/signin"]);
  }

  get user(){
    return localStorage.getItem('name')
  }
}
