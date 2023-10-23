import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LogInService } from '../servicios/log-in.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  loginForm = new FormGroup(
    {
    userLog: new FormControl('',[Validators.required,Validators.email]),
    passLog: new FormControl('', [ Validators.required])
    }
  )

  constructor(private logInService: LogInService){}

  onSubmit(){
    this.logInService.onLogIn(this.loginForm.value.userLog, this.loginForm.value.passLog);
  }


}
