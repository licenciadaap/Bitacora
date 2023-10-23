import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetHorseInformationService {

  endpoint: string = 'http://localhost:4201';

  constructor(private http: HttpClient) { }

  countHorses(){
    return this.http.get(this.endpoint + '/api/getRegisteredHorses').pipe(map(data =>{
      return data;
    }));
  }

  verifyHorse(id: string|null, name: string|null){
    return this.http.get(this.endpoint + `/api/verifyHorse/${id}/${name}`).pipe(map(data =>{
      return data;
    }))
  }
}
