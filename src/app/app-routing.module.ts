import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ForgetComponent } from './forget/forget.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { PasswordComponent } from './password/password.component';
import { HeaderComponent } from './header/header.component';

const routes: Routes = [
  { path: "forget",component: ForgetComponent },
  { path: "signup",component: SignupComponent },
  { path: "login",component: LoginComponent },
  { path: "password",component: PasswordComponent },
  { path: "header",component: HeaderComponent }
 


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
