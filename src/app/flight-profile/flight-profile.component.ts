import { Component, ViewChild } from '@angular/core';
import {MatTableDataSource, MatPaginator, MatSort} from '@angular/material';
import { FlightProfileService } from '../services/flight-profile.service';
import { FlightProfile } from './flightProfile.model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FlightProfileModalComponent } from '../flight-profile-modal/flight-profile-modal.component';



@Component({
  selector: 'app-flight-profile',
  templateUrl: './flight-profile.component.html',
  styleUrls: ['./flight-profile.component.css']
})
export class FlightProfileComponent {
  displayedColumns = ['id', 'callsign', 'squawk', 'firstEnrDistance'];
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
    console.log("Flight Profile",flightProfile);
    const modalRef = this.modalService.open(FlightProfileModalComponent);
    modalRef.componentInstance.flightProfile=flightProfile;
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
}
