import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { GetHorseInformationService } from '../servicios/get-horse-information.service';

export const urlFormExistsResolver: ResolveFn<Object> = (route, state) => {
  return inject(GetHorseInformationService).verifyHorse(route.paramMap.get('id'),route.paramMap.get('name'));
};
