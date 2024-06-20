import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from '../../environments/environment';
import { UserType, userregister } from '../_model/user.model';
import { Observable, Subject } from 'rxjs';
import { response } from 'express';
import { JwtHelperService } from '@auth0/angular-jwt';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  http = inject(HttpClient);
  userStatus: Subject<string> = new Subject();
  constructor(private jwt: JwtHelperService) { }

  baseUrl = environment.apiUrL;

  userregistration(data: userregister): Observable<any> {
    return this.http.post(`${this.baseUrl}home`,data);
  }
  sendOtp(email: string): Observable<any> {
    return this.http.post(`${this.baseUrl}home/send-otp`, { email });
  }

  verifyOtp(email: string, otp: string): Observable<any> {
    return this.http.post(`${this.baseUrl}home/validate-otp`, { email, otp });
  }
  login(email:string, password:string) {
   
    // return this.http.post(`${this.baseUrl}home/Login`, {
    //    email:email,
    //    password:password
    // });

    return this.http.post(`${this.baseUrl}home/Login`, {
      email:email,
      password:password
   });
    
}
isLoggedIn(): boolean {
  if (
    localStorage.getItem('access_token') != null &&
    !this.jwt.isTokenExpired()
  )
    return true;
  return false;
}
getUserInfo(): userregister | null {
  if (!this.isLoggedIn()) return null;
  var decodedToken = this.jwt.decodeToken();
  var user: userregister = {
    id: decodedToken.id,
    username: decodedToken.username,
    email: decodedToken.email,
    phone: decodedToken.phone,
    department: decodedToken.department,
    userType: UserType[decodedToken.userType as keyof typeof UserType],
    accountStatus: decodedToken.accountStatus,
    createdOn: decodedToken.createdOn,
    password: '',
  };
  return user;
}
}
