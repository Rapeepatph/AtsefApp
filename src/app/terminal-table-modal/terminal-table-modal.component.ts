import { Component, OnInit, Input, ViewChild, ViewEncapsulation } from '@angular/core';
import { terminalModalModel } from '../models/terminalModalModel';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { FlightProfileService } from '../services/flight-profile.service';
import { MapModalComponent } from '../map-modal/map-modal.component';

@Component({
  selector: 'app-terminal-table-modal',
  templateUrl: './terminal-table-modal.component.html',
  styleUrls: ['./terminal-table-modal.component.css'],
  encapsulation: ViewEncapsulation.None,   //for size of modal that is opened by this component
})
export class TerminalTableModalComponent implements OnInit {
  @Input() dataInput ;

  displayedColumns = [  'callsign','departure','arrival','Time at TMA','Time at Arrival','action'];
  dataSource: MatTableDataSource<terminalModalModel>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(private activeModal : NgbActiveModal,private _flightProfileService:FlightProfileService
  ,private modalService: NgbModal) { }

  ngOnInit() {
    this._flightProfileService.getDetailTerminal(this.dataInput.arrival,new Date(this.dataInput.startTime).toISOString(),new Date(this.dataInput.endingTime).toISOString()
                                                  ,this.dataInput.aircraft,this.dataInput.runwayHeading,this.dataInput.secondEntrySector)
                                                  .subscribe(
                                                    res=>{
                                                      this.dataSource = new MatTableDataSource<terminalModalModel>(res);
    
                                                      this.dataSource.paginator = this.paginator;
                                                      this.dataSource.sort = this.sort;
                                                    },
                                                    err =>console.error('Can not get terminal!',err.message)
                                                  )
  }
  closewithButton(){
    this.activeModal.close();
  }

  closewithDismiss(){
    this.activeModal.dismiss();
  }
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  open(data){
    const modalRef = this.modalService.open(MapModalComponent,{size:'lg',windowClass: 'modal-adaptive'});
    modalRef.componentInstance.dataInput = data;
  }
}
