import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VerifyTokenService {

  endpointLogIn: string = 'http://localhost:4201';

  constructor(private http: HttpClient) { }

  verifyToken(){
    return this.http.get<any>(this.endpointLogIn + "/api/verifyTokenLi");
  }
}
