import { AuthService } from './services/auth.service';
import { HttpInterceptor } from '@angular/common/http';
import { Injectable, Injector} from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class TokeninterceptorService implements HttpInterceptor{

  constructor(private injector:Injector) { }

  intercept(req:any,next:any){
    let authService = this.injector.get(AuthService)
    let tokenizedreq = req.clone({
      setHeaders : {
        Authorization: `Bearer ${authService.gettoken()}`
      }
    })
    return next.handle(tokenizedreq)
  }

}
