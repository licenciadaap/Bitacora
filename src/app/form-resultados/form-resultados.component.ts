import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router} from '@angular/router';
import { CatalogosService } from '../servicios/catalogos.service';
import { BitacoraCaballosService } from '../servicios/bitacora-caballos.service';

@Component({
  selector: 'app-form-resultados',
  templateUrl: './form-resultados.component.html',
  styleUrls: ['./form-resultados.component.css']
})
export class FormResultadosComponent implements OnInit{
  constructor(private route: ActivatedRoute, private router: Router, private catalogos: CatalogosService, private bitHorse: BitacoraCaballosService){};

  idHorse: string|null = '';
  nameHorse: string|null = '';
  competencias: any;
  alturas: any;
  modalidades: any;

  ngOnInit(): void {

    this.catalogoCompetencias();
    this.catalogoAlturas();
    this.catalogoModalidades();

    this.route.data.subscribe(({horseExistsResolver}) =>{
      if (horseExistsResolver.exists === 1) {
        this.idHorse = horseExistsResolver.elements[0].id;
        this.nameHorse = horseExistsResolver.elements[0].name;
      } else {
        this.router.navigate(['error']);
      }
    });

  }

  formResultados = new FormGroup({
      sedeCompetencia: new FormControl('',[Validators.required]),
      fechaCompetencia: new FormControl('',[Validators.required]),
      tipoCompetencia: new FormControl('',[Validators.required]),
      saltoForm: new FormGroup({
        altura: new FormControl(''),
        modalidad: new FormControl(''),
        puntosMalos: new FormControl(''),
        tiempo: new FormControl(''),
        lugar: new FormControl('')
      }),
      adiestramientoForm: new FormGroup({
        categoria: new FormControl(''),
        puntuacion: new FormControl(''),
        juez: new FormControl('')
      }),
      observaciones: new FormControl('')
    }
  );

  onSubmit(){
    if (this.formResultados.value.tipoCompetencia === '1') {
      this.bitHorse.agregarResultadoSalto(Number(this.idHorse),this.formResultados.value.sedeCompetencia, this.formResultados.value.fechaCompetencia, Number(this.formResultados.value.tipoCompetencia), this.formResultados.value.observaciones,
      Number(this.formResultados.value.saltoForm?.altura),Number(this.formResultados.value.saltoForm?.modalidad),Number(this.formResultados.value.saltoForm?.puntosMalos),Number(this.formResultados.value.saltoForm?.tiempo),Number(this.formResultados.value.saltoForm?.lugar)).subscribe(
        data=>{
          if (data) {
            this.router.navigate(['forms/registrado',this.idHorse,this.nameHorse]);
          } else {
            console.log('error');
          }
        }
      );
      
    } else if (this.formResultados.value.tipoCompetencia === '2') {
      this.bitHorse.agregarResultadoAdiestramiento(Number(this.idHorse),this.formResultados.value.sedeCompetencia,this.formResultados.value.fechaCompetencia, Number(this.formResultados.value.tipoCompetencia),this.formResultados.value.observaciones,
      this.formResultados.value.adiestramientoForm?.categoria,Number(this.formResultados.value.adiestramientoForm?.puntuacion),this.formResultados.value.adiestramientoForm?.juez).subscribe(
        data=>{
          if (data) {
            this.router.navigate(['forms/registrado',this.idHorse,this.nameHorse]);
          } else {
            console.log('error');
          }
        }
      );
      
    }

  }

  validator(){
    if (this.formResultados.value.tipoCompetencia === '1') {

      for(const key in this.formResultados.get('adiestramientoForm')?.value){

        this.formResultados.get(`adiestramientoForm.${key}`)?.reset();
        this.formResultados.get(`adiestramientoForm.${key}`)?.removeValidators([Validators.required]);
        this.formResultados.get(`adiestramientoForm.${key}`)?.updateValueAndValidity();

      }

      for(const key in this.formResultados.get('saltoForm')?.value){
        this.formResultados.get(`saltoForm.${key}`)?.reset();
        this.formResultados.get(`saltoForm.${key}`)?.removeValidators([Validators.required]);
        if (key === 'tiempo') {
          this.formResultados.get(`saltoForm.${key}`)?.setValidators([Validators.required,Validators.pattern('[+-]?([0-9]*[.])?[0-9]+')]);
          
        } else {
          this.formResultados.get(`saltoForm.${key}`)?.setValidators([Validators.required]);
          
        }
        this.formResultados.get(`saltoForm.${key}`)?.updateValueAndValidity();

      }
      
      
    } else if (this.formResultados.value.tipoCompetencia === '2'){

      for(const key in this.formResultados.get('adiestramientoForm')?.value){

        this.formResultados.get(`adiestramientoForm.${key}`)?.reset();
        this.formResultados.get(`adiestramientoForm.${key}`)?.removeValidators([Validators.required]);
        if (key === 'puntuacion') {
          this.formResultados.get(`adiestramientoForm.${key}`)?.setValidators([Validators.required,Validators.pattern('[+-]?([0-9]*[.])?[0-9]+')]);
          
        } else {
          this.formResultados.get(`adiestramientoForm.${key}`)?.setValidators([Validators.required]);
          
        }
        this.formResultados.get(`adiestramientoForm.${key}`)?.updateValueAndValidity();

      }

      for(const key in this.formResultados.get('saltoForm')?.value){

        this.formResultados.get(`saltoForm.${key}`)?.reset();
        this.formResultados.get(`saltoForm.${key}`)?.removeValidators([Validators.required]);
        this.formResultados.get(`saltoForm.${key}`)?.updateValueAndValidity();

      }
    }
  }

  catalogoCompetencias(){
    this.catalogos.getCompetencias().subscribe(data=>{this.competencias = data});
  }
  catalogoAlturas(){
    this.catalogos.getAlturas().subscribe(data=>{this.alturas = data});
  }
  catalogoModalidades(){
    this.catalogos.getModalidades().subscribe(data=>{this.modalidades = data});
  }


}
