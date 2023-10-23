import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { SafeUrl } from '@angular/platform-browser';
import { GetHorseInformationService } from '../servicios/get-horse-information.service';
import { CatalogosService } from '../servicios/catalogos.service';
import { Observable, map, mergeAll, switchMap, tap } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { DialogExampleComponent } from '../dialog-example/dialog-example.component';
import { BitacoraCaballosService } from '../servicios/bitacora-caballos.service';


declare function collapsibleClick() : void;

@Component({
  selector: 'app-horse-information',
  templateUrl: './horse-information.component.html',
  styleUrls: ['./horse-information.component.css']
})
export class HorseInformationComponent implements OnInit{
  constructor(private route: ActivatedRoute, private router: Router, private catalogos: CatalogosService, public dialog: MatDialog, private bitHorse: BitacoraCaballosService ){};

  idHorse: string|null = '';
  urlSelect:string = '';
  url:SafeUrl = '';
  horseName: string = '';
  qrName: string = '';

  bitPeso: any;
  bitPesoInfo: boolean = false;

  bitHerraje: any;
  bitHerrajeInfo: boolean = false;

  bitPista: any;
  bitPistaInfo: boolean = false;

  bitResultados: any;
  bitResultadosInfo: boolean = false;

  bitVet: any;
  bitVetInfo: boolean = false;

  bitAlimentacion: any;
  bitAlimentacionInfo: boolean = false;
  totalAlimento: number = 0;
  totalPasto: number = 0;

  bitHidratacion: any;
  bitHidratacionInfo: boolean = false;
  

  ngOnInit(): void {
    
    collapsibleClick();
    this.route.data.subscribe(
      ({qrResolver})=> {
      this.urlSelect = qrResolver.url;
      this.qrName = 'QR-' + qrResolver.name;
      this.horseName = qrResolver.name;
      this.idHorse = qrResolver.id;
    });



    this.route.data.subscribe(({getBit}) =>{
      getBit[0].subscribe((data:any) =>{
        if (data.length !== 0) {
          this.bitPesoInfo = true;
          this.bitPeso = data;
        }


      });
      getBit[1].subscribe((data:any) =>{
        if (data.length !== 0) {
          this.bitHerrajeInfo = true;
          this.bitHerraje = data;
        } 
      });
      getBit[2].subscribe((data:any) =>{
        if (data.length !== 0) {
          this.bitPistaInfo = true;
          this.bitPista = data;
        }
      });
      getBit[3].subscribe((data:any) =>{
        if (data.length !== 0) {
          this.bitResultadosInfo = true;
          this.bitResultados = data;
        }
      });
      getBit[4].subscribe((data:any) =>{
        if (data.length !== 0) {
          this.bitVetInfo = true;
          this.bitVet = data;
        }
      });
      getBit[5].subscribe((data:any) =>{
        if (data.length !== 0) {
          this.bitAlimentacionInfo = true;
          this.bitAlimentacion = data;
          for (let element of data) {
            this.totalAlimento += Number(element.cantidad_alimento);
            this.totalPasto += Number(element.cantidad_pasto);
          }
        }
      });
      getBit[6].subscribe((data:any) =>{
        if (data.length !== 0) {
          this.bitHidratacionInfo = true;
          this.bitHidratacion = data;
        }
      });
    });
  }

  onCodeChange(url: SafeUrl){
    this.url = url;
  }

  goToMenu(){
    this.router.navigate(['user']);
  }

  openDialog(idResultado: number,tipo_competencia: number){
    if (tipo_competencia === 1) {
      this.bitHorse.obtenerResultados(Number(this.idHorse),this.horseName,Number(tipo_competencia),idResultado).subscribe((datos:any) =>{
        this.dialog.open(DialogExampleComponent, {data: {tipo_competencia: 1,altura: datos.altura, modalidad: datos.modalidad, puntosMalos: datos.puntos_malos, tiempo: datos.tiempo, lugar: datos.lugar_obtenido}})
      })
      
    }else if(tipo_competencia === 2){
      this.bitHorse.obtenerResultados(Number(this.idHorse),this.horseName,Number(tipo_competencia),idResultado).subscribe((datos:any) =>{
        this.dialog.open(DialogExampleComponent, {data: {tipo_competencia: 2,categoria: datos.categoria, puntuacion: datos.puntuacion, juez: datos.juez}})
      })

    }

  }

}
