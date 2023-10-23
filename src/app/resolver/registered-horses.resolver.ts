import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { GetHorseInformationService } from '../servicios/get-horse-information.service';

export const registeredHorsesResolver: ResolveFn<Object> = (route, state) => {
  return inject(GetHorseInformationService).countHorses();
};
