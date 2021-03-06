import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import * as mapboxgl from 'mapbox-gl';
import * as $ from 'jquery';
@Component({
  selector: 'app-map-modal',
  templateUrl: './map-modal.component.html',
  styleUrls: ['./map-modal.component.css']
})
export class MapModalComponent implements OnInit {
  map: mapboxgl.Map;
  myHeight = window.innerHeight-20;
  constructor(private activeModal : NgbActiveModal
  
  ) { }

  ngOnInit() {
    document.getElementById('map').setAttribute("style","height:"+this.myHeight+"px");
    
    this.buildMap();
  }
  closewithButton(){
    this.activeModal.close();
  }

  closewithDismiss(){
    this.activeModal.dismiss();
  }
  buildMap(){
    mapboxgl.accessToken = 'pk.eyJ1IjoicmFwZWVwYXRwaCIsImEiOiJjamFpejVrOGgyMXBxMzNxdTQ5aWdtcTM1In0.XCwwqYiQ2AA9va7j2jUMwg';
    this.map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/dark-v9',
      zoom: 8,
      center:  [102.786983, 17.384628], // starting position
      bearing: 27.5 // bearing in degrees
    });
    $('#chooseLocation').on('shown.bs.modal', function() {
      this.map.invalidateSize();
    });
    
  }
}
