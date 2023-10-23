import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router} from '@angular/router';
import { BitacoraCaballosService } from '../servicios/bitacora-caballos.service';

@Component({
  selector: 'app-form-hidratacion',
  templateUrl: './form-hidratacion.component.html',
  styleUrls: ['./form-hidratacion.component.css']
})
export class FormHidratacionComponent implements OnInit{
  constructor(private fb: FormBuilder,private route: ActivatedRoute, private router: Router, private bitHorse: BitacoraCaballosService){};

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

  formHidra = this.fb.group({
    fecha: ['',Validators.required],
    litrosCubeta1: ['', [Validators.required,Validators.pattern('[+-]?([0-9]*[.])?[0-9]+'),Validators.max(20),Validators.min(0)]],
    litrosCubeta2: ['', [Validators.required,Validators.pattern('[+-]?([0-9]*[.])?[0-9]+'),Validators.max(20),Validators.min(0)]]
  });

  onSubmit(){
    this.bitHorse.agregarHidratacion(Number(this.idHorse),this.formHidra.value.fecha,Number(this.formHidra.value.litrosCubeta1),Number(this.formHidra.value.litrosCubeta2)).subscribe(data =>{
      if (data) {
        this.router.navigate(['forms/registrado',this.idHorse,this.nameHorse]);
      } else {
        console.log('error');
      }
    }
    );
  }

}
