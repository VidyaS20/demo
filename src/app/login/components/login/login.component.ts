import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;

  loginMode:boolean = true;
  constructor(private fb: FormBuilder, private router:Router) {

   }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: [],
      password : []
    })
  }

  onSubmit(){
    console.log('data submitted',this.loginForm.value);
    const {username, password} = this.loginForm.value

    console.log('username is =>',username)
    console.log('password is =>', password)

    if(username == 'admin' && password == '12345'){
      alert('Login Successful')
      this.router.navigate(['/home'])
    } else {
      alert('Login Failed..Please check your username or password.')
    }
  }

  createAccount(){
    this.loginMode = !this.loginMode
    console.log('Create account calling')
  }
}
