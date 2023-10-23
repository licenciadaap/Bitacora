import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { AddHorseService } from '../servicios/add-horse.service';

export const qrComponentResolver: ResolveFn<Object> = (route, state) => {
  return inject(AddHorseService).getURL(Number(route.paramMap.get('id'))!,route.paramMap.get('name')!);
};
