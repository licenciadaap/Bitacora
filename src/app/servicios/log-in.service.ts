import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LogInService {

  endpointLogIn: string = 'http://localhost:4201';

  constructor(private http: HttpClient, private route:Router) { }

  onLogIn(userIn: any, passIn: any){

    this.http.post<any>(this.endpointLogIn + "/api/login",
      {
        user: userIn,
        pass: passIn
      }).subscribe(data=>{
        localStorage.setItem('id_token',data.token);
        this.route.navigate(['user']);
      }) 
  }
}
