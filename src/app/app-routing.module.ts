import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { UnlockAccountComponent } from './unlock-account/unlock-account.component';

const routes: Routes = [
  {path: "", component: LoginComponent},
  {path: "sign-up", component: RegistrationComponent},
  {path: "forgotPassword", component: ForgotPasswordComponent},
  {path:"unlockAcc", component: UnlockAccountComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
