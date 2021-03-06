import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  loginUserData:any = {}
  

  constructor(private auth:AuthService,
              private router:Router) { }

  ngOnInit(): void {
  }

   logdata(){
     this.auth.logdata(this.loginUserData).subscribe(
      res=>{console.log(res)
        localStorage.setItem('token',res.token)
        this.router.navigate(['/dashboard'])
        },
       err=>console.log(err)
     )
   }
}
