import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddHorseService {
  endpoint: string = 'http://localhost:4201';

  constructor(private http:HttpClient) { }

  addHorse(horseName: any,horseAge: any,horseBreed: any,horseGender: any,horseRegNum: any,horseMicro: any,horseActivity: any){
    return this.http.post<any>(this.endpoint + '/api/registroCaballo',{
      name: horseName,
      age: horseAge,
      breed: horseBreed,
      gender: horseGender,
      registerNumber: horseRegNum,
      microchip: horseMicro,
      activity: horseActivity
    }).pipe(map(data=>{
      return data;
    }));
  }

  updateURL(id: number, name: string, url:string){
    return this.http.post<any>(this.endpoint + "/api/updateURL", {
      id: id,
      name: name,
      url: url
    }).pipe(map(data =>{ return data;}));
  }

  getURL(id:number,name:string|null){
    return this.http.get<any>(this.endpoint + `/api/getQR/${id}/${name}`).pipe(map(data =>{return data;}));
  }

}
