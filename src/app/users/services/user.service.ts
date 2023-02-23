import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url = 'https://jsonplaceholder.typicode.com/users'

  constructor(private http: HttpClient) { }

  getAllUsers(){
    return this.http.get(this.url)
  }


  getUser(id: any){
    return this.http.get(this.url +'/'+id)
  }
}
