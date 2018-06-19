import { Component, ViewChild } from '@angular/core';
import {MatTableDataSource, MatPaginator, MatSort} from '@angular/material';
import { FlightProfileService } from '../services/flight-profile.service';
import { FlightProfile } from './flightProfile.model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FlightProfileModalComponent } from '../flight-profile-modal/flight-profile-modal.component';
import {FormControl} from '@angular/forms';

import {MomentDateAdapter} from '@angular/material-moment-adapter';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';



//import {default as _rollupMoment} from 'moment';

// export const MY_FORMATS = {
//   parse: {
//     dateInput: 'LL',
//   },
//   display: {
//     dateInput: 'LL',
//     monthYearLabel: 'MMM YYYY',
//     dateA11yLabel: 'LL',
//     monthYearA11yLabel: 'MMMM YYYY',
//   },
// };

@Component({
  selector: 'app-flight-profile',
  templateUrl: './flight-profile.component.html',
  styleUrls: ['./flight-profile.component.css'],
  providers: [
    // `MomentDateAdapter` can be automatically provided by importing `MomentDateModule` in your
    // application's root module. We provide it at the component level here, due to limitations of
    // our example generation script.
    // {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},

    // {provide: MAT_DATE_FORMATS, useValue: MY_FORMATS},
  ],
})



export class FlightProfileComponent {
  displayedColumns = [ 'callsign', 'firstEnrDistance','firstEnrTime','secondEnrDistance','secondEnrTime'];
  dataSource: MatTableDataSource<FlightProfile>;
  
  
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
              private _flightProfileService :FlightProfileService,
              private modalService :NgbModal
            ) 
  {
    this._flightProfileService.getFlightProfiles().subscribe(
      (res:FlightProfile[])=>{
        
        this.dataSource = new MatTableDataSource<FlightProfile>(res);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      error=>console.error('Can not get flight profile!',error.message)
    );
    
  }

  /**
   * Set the paginator and sort after the view init since this component will
   * be able to query its view for the initialized paginator and sort.
   */
  // ngAfterViewInit() {
  //   this.dataSource.paginator = this.paginator;
  //   this.dataSource.sort = this.sort;
  // }

  ShowDetail(flightProfile){
    const modalRef = this.modalService.open(FlightProfileModalComponent);
    modalRef.componentInstance.flightProfile=flightProfile;
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
}
