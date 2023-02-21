import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users:any;

  constructor(private userServ: UserService) { }

  ngOnInit(): void {
    this.userServ.getUsers().subscribe(response=>{
      console.log('users data from jsonplaceholder',response)
      this.users = response;
    });
  }

}
