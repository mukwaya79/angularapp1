import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  private loginurl = 'http://127.0.0.1:5000/api/login'

  constructor(private http:HttpClient,
              private router:Router) { }

 
  logdata(user: any){
    return this.http.post<any>( this.loginurl,user)
}

 loggedIn(){
   return !!localStorage.getItem('token')
 }
 gettoken(){
   return localStorage.getItem('token')
 }
 logoutUser(){
   return localStorage.removeItem('token') 
        this.router.navigate(['/home'])
 }

}
