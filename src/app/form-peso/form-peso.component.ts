import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router} from '@angular/router';
import { BitacoraCaballosService } from '../servicios/bitacora-caballos.service';

@Component({
  selector: 'app-form-peso',
  templateUrl: './form-peso.component.html',
  styleUrls: ['./form-peso.component.css']
})
export class FormPesoComponent implements OnInit{
  constructor(private route: ActivatedRoute, private router: Router, private http: HttpClient, private bitHorse: BitacoraCaballosService){};

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

  formPeso = new FormGroup({
    peso: new FormControl('',[Validators.required,Validators.pattern('[+-]?([0-9]*[.])?[0-9]+')]),
    fechaPeso: new FormControl('',[Validators.required])
  });

  onSubmit(){
    this.bitHorse.agregarPeso(Number(this.formPeso.value.peso),this.formPeso.value.fechaPeso,Number(this.idHorse)).subscribe(data =>{
      if (data) {
        this.router.navigate(['forms/registrado',this.idHorse,this.nameHorse]);
      } else {
        console.log('error');
      }
    }
    );
  }

}
