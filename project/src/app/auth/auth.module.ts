import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { AuthRoutingModule } from './auth-routin-module';
import { RegisterComponent } from './register/register.component';
import { FormsModule } from '@angular/forms';
import { LogoutComponent } from './logout/logout.component';




@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    LogoutComponent,
    
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule,

  ],
  exports: [
    LoginComponent
  ]
})
export class AuthModule { }
