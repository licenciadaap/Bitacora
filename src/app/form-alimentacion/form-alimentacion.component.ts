import { Component, OnInit } from '@angular/core';
import {FormBuilder, AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { ActivatedRoute, Router} from '@angular/router';
import { BitacoraCaballosService } from '../servicios/bitacora-caballos.service';


export function atLeastOneValidator(): ValidatorFn{
  return (control: AbstractControl): ValidationErrors | null =>{
    const value = control.value;

    const valAlimento = (value.Alimento.cantidadAlimento && value.Alimento.tipoAlimento) ? true : false;
    const valPasto = (value.Pasto.cantidadPasto && value.Pasto.tipoPasto) ? true : false;
    const valSuplementos = (value.Suplementos.textoSuplementos) ? true : false;
    const validForm = valAlimento || valPasto || valSuplementos;
    let validSubForm = true;

    if (valAlimento) {
      validSubForm = ((value.Pasto.cantidadPasto && value.Pasto.tipoPasto ) || (!value.Pasto.cantidadPasto && !value.Pasto.tipoPasto)) ? true: false;
    }else if(valPasto){
      validSubForm = ((value.Alimento.cantidadAlimento && value.Alimento.tipoAlimento) || (!value.Alimento.cantidadAlimento && !value.Alimento.tipoAlimento)) ? true: false;
    }

    const validTotalForm = validForm && validSubForm;

    return !validTotalForm ? {formValid: true} : null;

  }
}

@Component({
  selector: 'app-form-alimentacion',
  templateUrl: './form-alimentacion.component.html',
  styleUrls: ['./form-alimentacion.component.css']
})
export class FormAlimentacionComponent implements OnInit {
  constructor(private fb:FormBuilder,private route: ActivatedRoute, private router: Router,private bitHorse: BitacoraCaballosService){};

  idHorse: string|null = '';
  nameHorse: string|null = '';

  ngOnInit(): void {
    this.route.data.subscribe(({horseExistsResolver}) =>{
      if (horseExistsResolver.exists === 1) {
        this.idHorse = horseExistsResolver.elements[0].id;
        this.nameHorse = horseExistsResolver.elements[0].name;
      } else {
        this.router.navigate(['error']);
      }
    });
  }

  formsAlim = this.fb.group({
    hora: ['',[Validators.required]],
    subFormAlim: this.fb.group({
      Alimento: this.fb.group({
        cantidadAlimento: ['',[Validators.pattern('[+-]?([0-9]*[.])?[0-9]+')]],
        tipoAlimento: ['']
      }),
      Pasto: this.fb.group({
        cantidadPasto: ['',[Validators.pattern('[+-]?([0-9]*[.])?[0-9]+')]],
        tipoPasto: ['']
      }),
      Suplementos: this.fb.group({
        textoSuplementos: ['']
      })
    },{validators:[atLeastOneValidator()]})
  });

  onSubmit(){
    this.bitHorse.agregarAlimentacion(Number(this.idHorse),this.formsAlim.value.hora,Number(this.formsAlim.value.subFormAlim?.Alimento?.cantidadAlimento),this.formsAlim.value.subFormAlim?.Alimento?.tipoAlimento,
    Number(this.formsAlim.value.subFormAlim?.Pasto?.cantidadPasto),this.formsAlim.value.subFormAlim?.Pasto?.tipoPasto,this.formsAlim.value.subFormAlim?.Suplementos?.textoSuplementos).subscribe(data =>{
      if (data) {
        this.router.navigate(['forms/registrado',this.idHorse,this.nameHorse]);
      } else {
        console.log('error');
      }
    }
    );
  }
}
