import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AddHorseService } from '../servicios/add-horse.service';
import { CatalogosService } from '../servicios/catalogos.service';

@Component({
  selector: 'app-registrar-caballo',
  templateUrl: './registrar-caballo.component.html',
  styleUrls: ['./registrar-caballo.component.css']
})
export class RegistrarCaballoComponent implements OnInit {

  ngOnInit(): void {
      this.catalogoActivity();
      this.catalogoGender();
  }

  regForm = new FormGroup(
    {
    horseName: new FormControl(undefined,[Validators.required]),
    horseAge: new FormControl(1, [Validators.min(1),Validators.max(30)]),
    horseBreed: new FormControl(undefined, [ Validators.required]),
    horseGender: new FormControl(undefined, [ Validators.required]),
    horseRegNum: new FormControl(undefined),
    horseMicro: new FormControl(undefined),
    horseActivity: new FormControl(undefined, [Validators.required]),
    }
  )

  activity:any;
  gender:any;
  qrUrl: string = 'http://localhost:4200/forms/';


  constructor(private addHorseService: AddHorseService, private catalogos: CatalogosService, private router:Router){}
  
  onSubmit(){
    this.addHorseService.addHorse(this.regForm.value.horseName,this.regForm.value.horseAge,this.regForm.value.horseBreed,this.regForm.value.horseGender,this.regForm.value.horseRegNum,this.regForm.value.horseMicro,this.regForm.value.horseActivity).subscribe(data=>{
      if(data.result){
        let horseUrl = this.qrUrl + data.id + "/" + data.name;
        this.updateURL(data.id,data.name,horseUrl);

      }else{
        console.log("Error");
      }
    });
  }

  updateURL(id: number,name: string,url: string){
    this.addHorseService.updateURL(id,name,url).subscribe(data2 =>{
      this.router.navigate(['generatedQR',id,name]);
    });
  }

  catalogoActivity(){
    this.catalogos.getActivity().subscribe(data=>{this.activity = data});
  };
  
  catalogoGender(){
    this.catalogos.getGender().subscribe(data=>{this.gender = data});
    
  };
    
}





