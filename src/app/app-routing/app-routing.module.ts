import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FlightProfileComponent } from '../flight-profile/flight-profile.component';

import { RegistrationFormComponent } from '../account/registration-form/registration-form.component';
import { LoginFormComponent } from '../account/login-form/login-form.component';
import { AuthGuard } from '../auth.guard';
import { TerminalEfficiencyComponent } from '../terminal-efficiency/terminal-efficiency.component';

const routes:Routes=[
  {path:'flight',component:FlightProfileComponent,canActivate: [AuthGuard]},
  {path:'terminal',component:TerminalEfficiencyComponent,canActivate: [AuthGuard]},
 
  {path:'register',component:RegistrationFormComponent},
  {path:'login',component:LoginFormComponent},
  {path:'',redirectTo:'/flight',pathMatch:'full'}
  
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
