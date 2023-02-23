import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users:any;
  userData: any;
  isLoading: boolean = false

  constructor(private userServ: UserService) { }

  ngOnInit(): void {
    this.userServ.getAllUsers().subscribe(response=>{
      console.log('users data from jsonplaceholder',response)
      this.users = response;
    });
  }

  checkboxClicked(id: any ){
    console.log('checkbox clicked',id);
    this.isLoading = true;
    setTimeout(() => {
      this.userServ.getUser(id).subscribe(response=>{
        console.log('user data by their id',response)
        this.userData = response;
        this.isLoading = false
      });
    }, 1000);

  }
}
