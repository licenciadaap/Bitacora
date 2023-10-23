import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router} from '@angular/router';
import { BitacoraCaballosService } from '../servicios/bitacora-caballos.service';

@Component({
  selector: 'app-form-vet',
  templateUrl: './form-vet.component.html',
  styleUrls: ['./form-vet.component.css']
})
export class FormVetComponent implements OnInit{
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

  formVet = new FormGroup({
    fechaVisitaVet: new FormControl('',[Validators.required]),
    razonVet: new FormControl('',[Validators.required]),
    diagnostico: new FormControl('',[Validators.required]),
    tratamiento: new FormControl('', [Validators.required])
  });

  onSubmit(){
    this.bitHorse.agregarVisitaVet(Number(this.idHorse),this.formVet.value.fechaVisitaVet, this.formVet.value.razonVet, this.formVet.value.diagnostico, this.formVet.value.tratamiento).subscribe(
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
