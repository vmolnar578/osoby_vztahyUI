import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { User } from 'src/app/models/user.model';
import { AuthService } from '../login-page.service';

@Component({
  selector: 'app-login-list',
  templateUrl: './login-list.component.html',
  styleUrls: ['./login-list.component.css'],
})
export class LoginListComponent implements OnInit {
  @Input()
  users: User[] = [];
  private sub: Subscription = new Subscription();
  @Output()
  editUser: EventEmitter<User> = new EventEmitter<User>();
  @Output()
  deleteUser: EventEmitter<User> = new EventEmitter<User>();
  constructor(private loginSrv: AuthService) {}
  ngOnInit(): void {
    this.refreshUsers();
  }
  refreshUsers(): void {
    this.sub.add(
      this.loginSrv.getUsers().subscribe((data: User[]) => {
        this.users = data;
      })
    );
  }
  edit(user: User): void {
    this.editUser.emit(user);
  }

  delete(user: User): void {
    this.deleteUser.emit(user);
  }
}
