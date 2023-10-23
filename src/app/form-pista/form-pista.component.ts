import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router} from '@angular/router';
import { BitacoraCaballosService } from '../servicios/bitacora-caballos.service';

@Component({
  selector: 'app-form-pista',
  templateUrl: './form-pista.component.html',
  styleUrls: ['./form-pista.component.css']
})
export class FormPistaComponent implements OnInit {
  constructor(private route: ActivatedRoute, private router: Router, private bitHorse: BitacoraCaballosService){};

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

  formPista = new FormGroup({
    trabajoEnPista: new FormControl('',[Validators.required]),
    jinete: new FormControl('',[Validators.required]),
    observaciones: new FormControl('')
  });

  onSubmit(){
    this.bitHorse.agregarPista(Number(this.idHorse),Number(this.formPista.value.trabajoEnPista),this.formPista.value.jinete,this.formPista.value.observaciones).subscribe(
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
