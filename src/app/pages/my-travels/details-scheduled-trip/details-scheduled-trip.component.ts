import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Loader } from '@googlemaps/js-api-loader';
declare var google;

@Component({
  selector: 'app-details-scheduled-trip',
  templateUrl: './details-scheduled-trip.component.html',
  styleUrls: ['./details-scheduled-trip.component.css']
})
export class DetailsScheduledTripComponent implements OnInit {

  map : any;
  @ViewChild('mapVer') divMap: ElementRef;

  mapOptions = {
    center: {lat: 4.815683 ,lng: -74.353531},    
    zoom: 17,
    disableDefaultUI: true,
    clickableIcons: false,
    styles: [ 
      { 
        featureType : "poi.business", 
        stylers : [ 
          { visibility : "off" } 
        ] 
      } 
    ]
  };

  constructor() { }

  ngOnInit(): void {
    let loader = new Loader({
      apiKey: 'key',
    });

    loader.load().then(() =>{
      this.map = new google.maps.Map(this.divMap.nativeElement, this.mapOptions);
    });
  }

}
