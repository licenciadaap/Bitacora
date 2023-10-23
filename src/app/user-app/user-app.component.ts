import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-app',
  templateUrl: './user-app.component.html',
  styleUrls: ['./user-app.component.css']
})


export class UserAppComponent implements OnInit {

  renderZero: boolean = true;
  numberRegistered: number = 0;
  horses: any;
  constructor(private router:Router, private route: ActivatedRoute) {}

  ngOnInit():void {
      this.route.data.subscribe(({countResolver})=>{
        if (countResolver.registered === 0) {
          this.renderZero = true;
        } else {
          this.renderZero = false;
          this.numberRegistered = countResolver.registered;
          this.horses = countResolver.elements;
        }
      });
  }

  redirectRg(){
    this.router.navigate(['registro'])
  }

}
