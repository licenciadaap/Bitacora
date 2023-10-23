import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-info-registrada',
  templateUrl: './info-registrada.component.html',
  styleUrls: ['./info-registrada.component.css']
})
export class InfoRegistradaComponent implements OnInit{
  constructor(private route: ActivatedRoute, private router: Router){};

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
}
