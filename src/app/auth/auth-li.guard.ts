import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { VerifyTokenService } from '../servicios/verify-token.service';
import { map } from 'rxjs';


export const authLIGuard: CanActivateFn = (route, state) => {


  const authService = inject(VerifyTokenService);
  const router = inject(Router);
  
  return authService.verifyToken().pipe(map(data =>{
    if(data.result){
      return true;
    }else{
      router.navigate(['']);
      localStorage.clear();
      return false;
    }
  }
  ));

};
