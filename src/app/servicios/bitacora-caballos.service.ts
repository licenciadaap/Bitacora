import { Time } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Timestamp, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BitacoraCaballosService {

  endpoint: string = 'http://localhost:4201';

  constructor(private http:HttpClient) { }

  

  agregarPeso(peso: number|null|undefined,fechaPeso: string|null|undefined,idCaballo: number|null){
    return this.http.post(this.endpoint + '/api/registrarPeso', {
      id: idCaballo,
      peso: peso,
      fechaPeso: fechaPeso
    }).pipe(map(data =>{return data}));
  }

  agregarHerraje(idCaballo: number|null, tipoHerraje: string|undefined|null, fechaHerraje: string|undefined|null, observaciones:string|undefined|null){
    return this.http.post(this.endpoint + '/api/registrarHerraje', {
      id: idCaballo,
      tipoHerraje: tipoHerraje,
      fechaHerraje: fechaHerraje,
      observaciones: observaciones
    }).pipe(map(data =>{return data}));
  }

  agregarVisitaVet(idCaballo: number|null, fechaVisitaVet: string|undefined|null, razon: string|undefined|null, diagnostico:string|undefined|null, tratamiento:string|undefined|null){
    return this.http.post(this.endpoint + '/api/registrarVisitaVet', {
      id: idCaballo,
      fechaVisitaVet: fechaVisitaVet,
      razon: razon,
      diagnostico: diagnostico,
      tratamiento: tratamiento
    }).pipe(map(data =>{return data}));
  }

  agregarPista(idCaballo: number|null, trabajoEnPista: number|undefined|null, jinete: string|undefined|null, observaciones:string|undefined|null){
    return this.http.post(this.endpoint + '/api/registrarPista', {
      id: idCaballo,
      trabajoEnPista: trabajoEnPista,
      jinete: jinete,
      observaciones: observaciones
    }).pipe(map(data =>{return data}));
  }

  agregarResultadoSalto(idCaballo: number|null,sede: string|null|undefined, fechaCompetencia: string|undefined|null, tipoCompetencia: number|undefined|null,observaciones:string|undefined|null,
    altura:number|undefined|null,modalidad:number|undefined|null,puntosMalos:number|undefined|null,tiempo:number|undefined|null,lugarObtenido:number|undefined|null){
    return this.http.post(this.endpoint + '/api/registrarResultadoSalto',{
      id: idCaballo,
      sede: sede,
      fechaCompetencia: fechaCompetencia,
      tipoCompetencia: tipoCompetencia,
      observaciones: observaciones,
      altura: altura,
      modalidad: modalidad,
      puntosMalos: puntosMalos,
      tiempo: tiempo,
      lugarObtenido: lugarObtenido
    }).pipe(map(data => { return data}));
  }

  agregarResultadoAdiestramiento(idCaballo: number|null,sede: string|null|undefined, fechaCompetencia: string|undefined|null, tipoCompetencia: number|undefined|null,observaciones:string|undefined|null,
    categoria:string|null|undefined,puntuacion:number|undefined|null,juez:string|null|undefined){
    return this.http.post(this.endpoint + '/api/registrarResultadoAdiestramiento',{
      id: idCaballo,
      sede: sede,
      fechaCompetencia: fechaCompetencia,
      tipoCompetencia: tipoCompetencia,
      observaciones: observaciones,
      categoria:categoria,
      puntuacion:puntuacion,
      juez:juez
    }).pipe(map(data => { return data}));
  }
  agregarAlimentacion(idCaballo: number|null,hora: string|undefined|null,cantidadAlimento:number|undefined|null,tipoAlimento:string|undefined|null,cantidadPasto: number|undefined|null,tipoPasto: string|undefined|null,suplementos: string|undefined|null){
    return this.http.post(this.endpoint + '/api/registrarAlimentacion',{
      id: idCaballo,
      hora: hora,
      cantidadAlimento: cantidadAlimento,
      tipoAlimento: tipoAlimento,
      cantidadPasto: cantidadPasto,
      tipoPasto: tipoPasto,
      suplementos: suplementos
    }).pipe(map(data => { return data}));
  }

  agregarHidratacion(idCaballo: number|null,fecha: string|undefined|null, litrosCubeta1: number|undefined|null, litrosCubeta2: number|undefined|null){
    return this.http.post(this.endpoint + '/api/registrarHidratacion',{
      id: idCaballo,
      fecha: fecha,
      litrosCubeta1: litrosCubeta1,
      litrosCubeta2: litrosCubeta2
    }).pipe(map(data => { return data}));

  }

  obtenerResultados(idCaballo: number|null,nombre: string|undefined|null, tipoCompetencia: number|undefined|null, idResultado: number|undefined|null){
    return this.http.get(this.endpoint + `/api/obtenerResultados/${idCaballo}/${nombre}/${tipoCompetencia}/${idResultado}`,{
    }).pipe(map(data => { return data}));

  }




}
