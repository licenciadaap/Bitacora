import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {HttpClientModule,HTTP_INTERCEPTORS} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { AuthInterceptorService } from './servicios/auth-interceptor.service';
import { UserAppComponent } from './user-app/user-app.component';
import { RegistrarCaballoComponent } from './registrar-caballo/registrar-caballo.component';
import { QRCodeModule } from 'angularx-qrcode';
import { QrMenuComponent } from './qr-menu/qr-menu.component';
import { HorseFormComponent } from './horse-form/horse-form.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HorseInformationComponent } from './horse-information/horse-information.component';
import { FormPesoComponent } from './form-peso/form-peso.component';
import { FormAlimentacionComponent } from './form-alimentacion/form-alimentacion.component';
import { FormHidratacionComponent } from './form-hidratacion/form-hidratacion.component';
import { FormHerrajeComponent } from './form-herraje/form-herraje.component';
import { FormPistaComponent } from './form-pista/form-pista.component';
import { FormVetComponent } from './form-vet/form-vet.component';
import { FormResultadosComponent } from './form-resultados/form-resultados.component';
import { InfoRegistradaComponent } from './info-registrada/info-registrada.component';
import { MaterialModule } from './material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DialogExampleComponent } from './dialog-example/dialog-example.component';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserAppComponent,
    RegistrarCaballoComponent,
    QrMenuComponent,
    HorseFormComponent,
    NotFoundComponent,
    HorseInformationComponent,
    FormPesoComponent,
    FormAlimentacionComponent,
    FormHidratacionComponent,
    FormHerrajeComponent,
    FormPistaComponent,
    FormVetComponent,
    FormResultadosComponent,
    InfoRegistradaComponent,
    DialogExampleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    QRCodeModule,
    MaterialModule,
    BrowserAnimationsModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
