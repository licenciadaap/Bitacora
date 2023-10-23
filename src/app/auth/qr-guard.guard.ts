import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AddHorseService } from '../servicios/add-horse.service';
import { map } from 'rxjs';

export const qrGuardGuard: CanActivateFn = (route, state) => {

  const addHorse = inject(AddHorseService);
  const rou = inject(Router);

  return addHorse.getURL(Number(route.paramMap.get('id')),route.paramMap.get('name')).pipe(map(data =>{
    if (data.name !== 'Not Found') {
      return true;
    } else {
      rou.navigate(['error']);
      return false;
    }
  }));
};
