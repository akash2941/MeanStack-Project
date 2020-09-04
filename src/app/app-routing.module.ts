import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ForgetComponent } from './forget/forget.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { PasswordComponent } from './password/password.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { CategaryComponent } from './categary/categary.component';
import { FooterComponent } from './footer/footer.component';
import { PaymentComponent } from './payment/payment.component';
import { LogfooterComponent } from './logfooter/logfooter.component';
import { ContactusComponent } from './contactus/contactus.component';
import { CartComponent } from './cart/cart.component';


const routes: Routes = [
 
  { path: "signup",component: SignupComponent },
  { path: "login",component: LoginComponent },
  { path: "password",component: PasswordComponent },
  { path: "header",component: HeaderComponent },
  { path: "home",component: HomeComponent },
  { path: "categary",component: CategaryComponent },
  { path: "footer",component: FooterComponent},
  { path: "payment",component: PaymentComponent},
  { path: "logfooter",component: LogfooterComponent},
  { path: "contactus",component: ContactusComponent},
  { path: "cart",component: CartComponent},
  
  
 
  
 
  { path: "", redirectTo:'/home', pathMatch:'full'},
  { path: "**",component: ForgetComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
