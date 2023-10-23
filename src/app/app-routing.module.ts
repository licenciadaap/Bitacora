import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UserAppComponent } from './user-app/user-app.component';
import { authLIGuard } from './auth/auth-li.guard';
import { RegistrarCaballoComponent } from './registrar-caballo/registrar-caballo.component';
import { QrMenuComponent } from './qr-menu/qr-menu.component';
import { HorseFormComponent } from './horse-form/horse-form.component';
import { qrComponentResolver } from './resolver/qr-component.resolver';
import { qrGuardGuard } from './auth/qr-guard.guard';
import { NotFoundComponent } from './not-found/not-found.component';
import { registeredHorsesResolver } from './resolver/registered-horses.resolver';
import { HorseInformationComponent } from './horse-information/horse-information.component';
import { FormPesoComponent } from './form-peso/form-peso.component';
import { FormAlimentacionComponent } from './form-alimentacion/form-alimentacion.component';
import { FormHidratacionComponent } from './form-hidratacion/form-hidratacion.component';
import { FormHerrajeComponent } from './form-herraje/form-herraje.component';
import { FormPistaComponent } from './form-pista/form-pista.component';
import { FormVetComponent } from './form-vet/form-vet.component';
import { FormResultadosComponent } from './form-resultados/form-resultados.component';
import { urlFormExistsResolver } from './resolver/url-form-exists.resolver';
import { InfoRegistradaComponent } from './info-registrada/info-registrada.component';
import { catalogoBitacorasResolver } from './resolver/catalogo-bitacoras.resolver';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'login'},
  {path:'login', component:LoginComponent},
  {path: 'user', component:UserAppComponent, canActivate: [authLIGuard], resolve: {countResolver: registeredHorsesResolver}},
  {path: 'registro', component:RegistrarCaballoComponent, canActivate: [authLIGuard]},
  {path: 'generatedQR/:id/:name', component: QrMenuComponent, canActivate: [authLIGuard,qrGuardGuard], resolve: {qrResolver: qrComponentResolver}},
  {path: 'horse/:id/:name', component: HorseInformationComponent, canActivate: [authLIGuard], resolve: {qrResolver: qrComponentResolver, getBit: catalogoBitacorasResolver}},
  {path: 'forms/:id/:name', component:HorseFormComponent, resolve: {horseExistsResolver: urlFormExistsResolver}},
  {path: 'forms/peso/:id/:name', component: FormPesoComponent , resolve: {horseExistsResolver: urlFormExistsResolver}},
  {path: 'forms/alimentacion/:id/:name', component: FormAlimentacionComponent , resolve: {horseExistsResolver: urlFormExistsResolver}},
  {path: 'forms/hidratacion/:id/:name', component: FormHidratacionComponent , resolve: {horseExistsResolver: urlFormExistsResolver}},
  {path: 'forms/herraje/:id/:name', component: FormHerrajeComponent , resolve: {horseExistsResolver: urlFormExistsResolver}},
  {path: 'forms/pista/:id/:name', component: FormPistaComponent , resolve: {horseExistsResolver: urlFormExistsResolver}},
  {path: 'forms/vet/:id/:name', component: FormVetComponent , resolve: {horseExistsResolver: urlFormExistsResolver}},
  {path: 'forms/resultados/:id/:name', component: FormResultadosComponent , resolve: {horseExistsResolver: urlFormExistsResolver}},
  {path: 'forms/registrado/:id/:name', component: InfoRegistradaComponent , resolve: {horseExistsResolver: urlFormExistsResolver}},
  {path: 'error', component:NotFoundComponent},
  { path: '**', redirectTo: 'error' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
