import { Component, OnInit, Input } from '@angular/core';
import { FlightProfile } from '../flight-profile/flightProfile.model';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-flight-profile-modal',
  templateUrl: './flight-profile-modal.component.html',
  styleUrls: ['./flight-profile-modal.component.css']
})
export class FlightProfileModalComponent implements OnInit {
  @Input() flightProfile:FlightProfile;
  constructor(private activeModal : NgbActiveModal) { }

  ngOnInit() {
  }

  closewithButton(){
    this.activeModal.close();
  }

  closewithDismiss(){
    this.activeModal.dismiss();
  }
}
