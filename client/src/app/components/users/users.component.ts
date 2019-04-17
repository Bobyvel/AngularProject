import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/core/models/user';
import { AuthService } from 'src/app/core/services/auth.service';
import { UserService } from 'src/app/core/services/user.service';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users$: Observable<User[]>;
  constructor(public authService: AuthService, private userService: UserService) { }

  ngOnInit() {
    this.users$ = this.userService.getAll();
    console.log(this.users$)
  }

  deleteAd(id) {
    console.log(id);
    this.userService.removeUser(id).subscribe(data => {
      console.log(data);
      this.users$ = this.userService.getAll();
    });
  }

}
