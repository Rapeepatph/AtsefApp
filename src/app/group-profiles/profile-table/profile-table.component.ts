import { Component, OnInit, ViewChild } from '@angular/core';
import { groupProfileModel } from '../../models/groupProfileModel';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { GroupProfileService } from '../../services/group-profile.service';

import { FlightProfileService } from '../../services/flight-profile.service';
import { FlightProfile } from '../../flight-profile/flightProfile.model';

@Component({
  selector: 'app-profile-table',
  templateUrl: './profile-table.component.html',
  styleUrls: ['./profile-table.component.css']
})
export class ProfileTableComponent implements OnInit {
   displayedColumns = [  'name','dataFrom','dataTo','status','action'];
  // dataSource: MatTableDataSource<groupProfileModel>;
  dataSelectedTable:any;
  dataSource: MatTableDataSource<groupProfileModel>;
  
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(
    private _groupProfileService :GroupProfileService,
    private _flightProfileService :FlightProfileService,
    ) {
    
    this._groupProfileService.getGroupProfile().subscribe(
      res=>{
          this.dataSource = new MatTableDataSource<groupProfileModel>(res);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        
      },
      error=>console.error('Can not get flight profile!',error.message)
    );
   }

  ngOnInit() {
  }
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
  changedStyle(status){
    if(status){
      return 'btn btn-success';
    }
    else{
      return 'btn btn-outline-secondary';
    }
  }
  sendDataToTable(item){
    console.log('item',item);
  }
  changedStatus(model){
    if(!model.status){
      model.status = 1;
      this._groupProfileService.upDateProfile(model).subscribe(
        res=>{
          
          this._groupProfileService.getGroupProfile().subscribe(
            res=>{
              this.dataSource = new MatTableDataSource<groupProfileModel>(res);
              
            }
          )
        },
        error=>{
          alert('Can not Activate! : '+error);
        }
      )
    }
  }

  deletedProfile(row){
    this._groupProfileService.deleteProfile(row).subscribe(
      res=>{
        alert('Delete Success.');
        this._groupProfileService.getGroupProfile().subscribe(
          res=>{
            this.dataSource = new MatTableDataSource<groupProfileModel>(res);
          })
      },
      error=>{
        alert('Can not delete :'+error);
      }
    )
  }
}
