import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FlightProfileComponent } from '../flight-profile/flight-profile.component';
import { MapComponent } from '../map/map.component';

const routes:Routes=[
  {path:'flight',component:FlightProfileComponent},
  {path:'map',component:MapComponent},
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
