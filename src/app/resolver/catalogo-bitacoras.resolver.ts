import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { CatalogosService } from '../servicios/catalogos.service';

export const catalogoBitacorasResolver: ResolveFn<Object> = (route, state) => {
  const catalogos = inject(CatalogosService);
  const cat = [catalogos.getBitacoras(route.paramMap.get('id'),route.paramMap.get('name'),'peso'),
  catalogos.getBitacoras(route.paramMap.get('id'),route.paramMap.get('name'),'herraje'),
  catalogos.getBitacoras(route.paramMap.get('id'),route.paramMap.get('name'),'pista'),
  catalogos.getBitacoras(route.paramMap.get('id'),route.paramMap.get('name'),'resultados'),
  catalogos.getBitacoras(route.paramMap.get('id'),route.paramMap.get('name'),'vet'),
  catalogos.getBitacoras(route.paramMap.get('id'),route.paramMap.get('name'),'alimentacion'),
  catalogos.getBitacoras(route.paramMap.get('id'),route.paramMap.get('name'),'hidratacion')];

  return cat;
};
