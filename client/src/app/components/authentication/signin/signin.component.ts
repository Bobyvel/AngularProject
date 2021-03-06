import { 
  Component, 
  OnInit, 
  ViewChild 
} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  @ViewChild('loginForm') loginForm: NgForm;

  constructor(
    private authService : AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  signIn() {
    this.authService
      .login(this.loginForm.value)
      .subscribe((data) => {
        console.log(data)
        localStorage.setItem('token', data['token']);
        localStorage.setItem('name', data['user'].name)
        if(data['user'].isAdmin){
          localStorage.setItem('admin', 'true')
        }
       
        this.router.navigate([ '/home' ])
      });
  }

}
