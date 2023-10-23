import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router} from '@angular/router';
import { BitacoraCaballosService } from '../servicios/bitacora-caballos.service';

@Component({
  selector: 'app-form-herraje',
  templateUrl: './form-herraje.component.html',
  styleUrls: ['./form-herraje.component.css']
})
export class FormHerrajeComponent {
  constructor(private route: ActivatedRoute, private router: Router, private bitHorse: BitacoraCaballosService){};

  formHerraje = new FormGroup({
    tipoHerraje: new FormControl(''),
    fechaHerraje: new FormControl('',[Validators.required]),
    observaciones: new FormControl('')
  });

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

  onSubmit(){
    this.bitHorse.agregarHerraje(Number(this.idHorse),this.formHerraje.value.tipoHerraje,this.formHerraje.value.fechaHerraje,this.formHerraje.value.observaciones).subscribe(
      data=>{
        if (data) {
          this.router.navigate(['forms/registrado',this.idHorse,this.nameHorse]);
        } else {
          console.log('error');
        }
      }
    )
  }

}
