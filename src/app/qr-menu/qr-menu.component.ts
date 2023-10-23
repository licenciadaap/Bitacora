import { Component, OnInit } from '@angular/core';
import { SafeUrl } from '@angular/platform-browser';
import { AddHorseService } from '../servicios/add-horse.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-qr-menu',
  templateUrl: './qr-menu.component.html',
  styleUrls: ['./qr-menu.component.css']
})
export class QrMenuComponent implements OnInit{

  urlSelect:string = '';
  url:SafeUrl = '';
  horseName: string = '';
  qrName: string = '';

  constructor(private addHorseService: AddHorseService, private route: ActivatedRoute, private router: Router){}

  async ngOnInit(): Promise<void> {
    this.route.data.subscribe(
      ({qrResolver})=> {
      this.urlSelect = qrResolver.url;
      this.qrName = 'QR-' + qrResolver.name;
      this.horseName = qrResolver.name;
    });
  }
  
  onCodeChange(url: SafeUrl){
    this.url = url;
  }

  goToMenu(){
    this.router.navigate(['user']);
  }

  goToRegister(){
    this.router.navigate(['registro']);
  }

}
