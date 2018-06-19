import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


import { AppComponent } from './app.component';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FlightProfileComponent } from './flight-profile/flight-profile.component';

import { AppRoutingModule } from './app-routing/app-routing.module';
import { AngularMaterialModule } from './angular-material/angular-material.module';
import { FlightProfileService } from './services/flight-profile.service';
import { FlightProfileModalComponent } from './flight-profile-modal/flight-profile-modal.component';

import { BaseService } from './services/base.service';
import { UserService } from './services/user.service';
import { RegistrationFormComponent } from './account/registration-form/registration-form.component';
import { LoginFormComponent } from './account/login-form/login-form.component';
import { AuthGuard } from './auth.guard';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { TokenInterceptor } from './interceptors/token.interceptor';
import { TerminalEfficiencyComponent } from './terminal-efficiency/terminal-efficiency.component';
import { JwtInterceptor } from './interceptors/jwt.interceptor';
import { TerminalTableComponent } from './terminal-table/terminal-table.component';
import { TerminalTableModalComponent } from './terminal-table-modal/terminal-table-modal.component';
import { MapModalComponent } from './map-modal/map-modal.component';
import { GroupProfileService } from './services/group-profile.service';
import { ProfileTableComponent } from './group-profiles/profile-table/profile-table.component';



@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FlightProfileComponent,
    
    FlightProfileModalComponent,
    RegistrationFormComponent,
    LoginFormComponent,
    TerminalEfficiencyComponent,
    TerminalTableComponent,
    TerminalTableModalComponent,
    MapModalComponent,
    ProfileTableComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    NgbModule.forRoot(),
    AppRoutingModule,
    AngularMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule                //import for using interceptor
  ],
  providers: [
    FlightProfileService,BaseService,UserService,AuthGuard,GroupProfileService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent],
  entryComponents:[FlightProfileModalComponent,TerminalTableModalComponent,MapModalComponent]
})
export class AppModule { }
