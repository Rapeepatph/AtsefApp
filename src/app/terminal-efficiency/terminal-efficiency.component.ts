import { Component, OnInit, ViewChild, EventEmitter, Output } from '@angular/core';
import * as moment from 'moment';
import { FormGroup, FormBuilder, FormControl, FormArray } from '@angular/forms';
import { FlightProfileService } from '../services/flight-profile.service';
import { FlightProfile } from '../flight-profile/flightProfile.model';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { TerminalTableModel } from '../models/terminalTableModel';
import { GroupProfileService } from '../services/group-profile.service';
@Component({
  selector: 'app-terminal-efficiency',
  templateUrl: './terminal-efficiency.component.html',
  styleUrls: ['./terminal-efficiency.component.css']
})
export class TerminalEfficiencyComponent implements OnInit {
  result=[];
  startDate = new Date();
  endingDate = new Date();
  airports = ['VTBS', 'VTBD', 'VTCC', 'VTSS', 'VTSP' , 'VTSM', 'VTSG' , 'VTCT'];
  airportsFormGroup: FormGroup;
  ProfileName:string;
  panelOpenState:boolean=false;
  //flightTable:any;
  //displayedColumns = [  'runwayHeading','aircraft','amount','arrival'];
  //dataSource: MatTableDataSource<TerminalTableModel>;
  selectedAirports=[];
  dataSelectArrival:any;
  dataSelectedTable:any;
  startDateSelected:any;
  endingDateSelected:any;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  
  constructor(private formBuilder: FormBuilder,
              private _flightProfileService:FlightProfileService,
              private _groupProfileService:GroupProfileService) { }

  ngOnInit() {
    this.airportsFormGroup = this.formBuilder.group({
      interests: this.formBuilder.array([])
    });
  }
  searchFlight() {
    const interests = this.airportsFormGroup.get('interests') as FormArray;
    this.result=[];
    //var concatArrival=interests.value.join();  // required checked airports
    var concatArrival = this.airports.join();   // required all airports
    this._flightProfileService.getTerminalByArrival(new Date(this.startDate).toISOString(),new Date(this.endingDate).toISOString(),concatArrival).subscribe(
      res=>{
        for(var key in res){
          this.result= this.result.concat(res[key].listFlightGroups);
        }
        this.selectedAirports = res;
        this.sendDataToTable(res[0]);
        
      },
      err =>console.error('Can not get terminal!',err.message)
    )
  }
  myFilter = (d: Date): boolean => {
    const day = d.getDay();
    // Prevent day from being selected by startdate.
    return d > this.startDate;
  }
  onChange(event) {
    const interests = this.airportsFormGroup.get('interests') as FormArray;
    if (event.checked) {
      interests.push(new FormControl(event.source.value));
    } else {
      const i = interests.controls.findIndex(x => x.value === event.source.value);
      interests.removeAt(i);
    }
  }

  // applyFilter(filterValue: string) {
  //   filterValue = filterValue.trim(); // Remove whitespace
  //   filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
  //   this.dataSource.filter = filterValue;
  // }
  sendDataToTable(item){
    this.dataSelectArrival = item.arrival;
    this.dataSelectedTable=item.listFlightGroups;
  this.startDateSelected=item.startTime;
  this.endingDateSelected = item.endingTime;
  }

  saveData(name){
    this._groupProfileService.postGroupProfile(name,new Date(this.startDate),new Date(this.endingDate),0)
                              .subscribe(data=>{
                                this.result.forEach(obj=>{
                                  obj.ProfileId=data.id;
                                  obj.Predict = (obj.p80 - obj.p20);
                                })
                                var model = {
                                  listModel:this.result
                                }
                                this.saveGroupStatistic(model);
                              },
                            //error=>{console.error('error from savedata',error)}
                            error => {
                              alert("Error saving data groupProfile name!"+",status code :"+ error.status+"("+error.statusText+")");
                              console.error("Error saving data!",error);
                            }
                            );
  }
  saveGroupStatistic(model){
    this._groupProfileService.postGroupStatistic(model).subscribe(
      data=>{
        alert('Save success!');
        this.ProfileName=''
        this.panelOpenState=true;
        window.scrollTo(0, 0);
      },
      error=>{
        alert("Error saving data groupStatistics !"+",status code :"+ error.status+"("+error.statusText+")");
        console.error("Error saving data!",error);
      }
    )
  }
}
