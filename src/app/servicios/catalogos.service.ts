import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CatalogosService {

  constructor(private http: HttpClient) { }
  endpoint: string = 'http://localhost:4201';
  getActivity(){
    return this.http.get(this.endpoint + '/api/getCatalogo/tbl_cat_activity').pipe(map(data=>{
      return data;
    }));
  }

  getGender(){
    return this.http.get(this.endpoint + '/api/getCatalogo/tbl_cat_gender').pipe(map(data=>{
      return data;
    }));

  }

  getCompetencias(){
    return this.http.get(this.endpoint + '/api/getCatalogo/tbl_cat_competencias').pipe(map(data=>{
      return data;
    }))
  }
  getAlturas(){
    return this.http.get(this.endpoint + '/api/getCatalogo/tbl_cat_alturas').pipe(map(data=>{
      return data;
    }))
  }
  getModalidades(){
    return this.http.get(this.endpoint + '/api/getCatalogo/tbl_cat_modalidades').pipe(map(data=>{
      return data;
    }))
  }

  getBitacoras(id: string|null|undefined,name: string|null|undefined, bitacora: string|null|undefined){
    return this.http.get(this.endpoint + `/api/obtenerInformacionBitacoras/${id}/${name}/${bitacora}`).pipe(map(data =>{
      return data;
    }))
  }
}
