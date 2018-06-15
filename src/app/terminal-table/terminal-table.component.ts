import { Component, OnInit, Input, ViewChild, OnChanges, ViewEncapsulation } from '@angular/core';
import { TerminalTableModel } from '../models/terminalTableModel';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';

import { TerminalTableModalComponent } from '../terminal-table-modal/terminal-table-modal.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-terminal-table',
  templateUrl: './terminal-table.component.html',
  styleUrls: ['./terminal-table.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class TerminalTableComponent implements OnChanges {
  @Input() dataTable;
  displayedColumns = [  'runwayHeading','aircraft','entrySector','min','max','avg','p20','p80','amount','arrival','action'];
  dataSource: MatTableDataSource<TerminalTableModel>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(private modalService: NgbModal) { 
    
  }


  ngOnChanges() {
    
    if(this.dataTable){
      this.dataSource = new MatTableDataSource<TerminalTableModel>(this.dataTable.listFlightGroups);
    
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }
    
  }
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  open(row) {
    console.log('row',row);
    var output = {
      arrival:row.arrival,
      startTime:this.dataTable.startTime,
      endingTime:this.dataTable.endingTime,
      runwayHeading:row.runwayHeading,
      aircraft:row.aircraft,
      secondEntrySector:row.secondEntrySector
    }
    const modalRef = this.modalService.open(TerminalTableModalComponent,{size:'lg',windowClass: 'modal-adaptive'});
    modalRef.componentInstance.dataInput = output;
  }
}
