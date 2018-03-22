import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FlightProfileComponent } from './flight-profile/flight-profile.component';
import { MapComponent } from './map/map.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { AngularMaterialModule } from './angular-material/angular-material.module';
import { FlightProfileService } from './services/flight-profile.service';
import { FlightProfileModalComponent } from './flight-profile-modal/flight-profile-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FlightProfileComponent,
    MapComponent,
    FlightProfileModalComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    NgbModule.forRoot(),
    AppRoutingModule,
    AngularMaterialModule
  ],
  providers: [FlightProfileService],
  bootstrap: [AppComponent],
  entryComponents:[FlightProfileModalComponent]
})
export class AppModule { }
