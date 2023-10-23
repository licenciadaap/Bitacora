import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-horse-form',
  templateUrl: './horse-form.component.html',
  styleUrls: ['./horse-form.component.css']
})
export class HorseFormComponent implements OnInit{
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
