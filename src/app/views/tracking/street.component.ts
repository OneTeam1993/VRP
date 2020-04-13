import { Component, SecurityContext, ViewEncapsulation, OnInit } from '@angular/core';
import { CarouselConfig } from 'ngx-bootstrap/carousel';
import * as moment from 'moment';
//import 'moment/locale/en-gb';
import { ConstantsService } from '../../common/services/constants.service';
import { RouterEvent, Router } from '@angular/router';
import { Location } from "@angular/common";
import { NgxSpinnerService } from "ngx-spinner";
import axios from "axios";
declare var $: any;
declare const google: any;

@Component({
  templateUrl: 'street.component.html',
  styleUrls: ["./street.component.css"],
  encapsulation: ViewEncapsulation.None,
  providers: [
    { provide: CarouselConfig, useValue: { interval: 1500, noPause: false } },
  ]
})
export class StreetComponent implements OnInit  {

  route: string;

  constructor(private _constant: ConstantsService, location: Location, private router: Router, private spinner: NgxSpinnerService) {
    this.router.events.subscribe((event: RouterEvent) => {
      if (location.path() != "") {
        this.route = location.path();
      }
    });
  }

  ngOnInit(): void {
    this.spinner.show();

    //================================INIT==================================//
    var latlng = new google.maps.LatLng(1.3521, 103.8198);
    var streetmapOptions = {
      zoom: 12,
      center: latlng,
      panControl: false,
      zoomControl: false,
      zoomControlOptions:
      {
        position: google.maps.ControlPosition.LEFT_TOP
      },
      mapTypeControl: false,
      streetViewControl: true,
      streetViewControlOptions: {
        position: google.maps.ControlPosition.RIGHT_BOTTOM
      },
      fullscreenControl: true,
      fullscreenControlOptions:
      {
        position: google.maps.ControlPosition.TOP_LEFT
      },
      scaleControl: false,
      overviewMapControl: false
    };
    var map = new google.maps.Map(document.getElementById("map"), streetmapOptions);
    var panorama = new google.maps.StreetViewPanorama(
      document.getElementById('street-map'), {
        position: latlng,
      pov: {
        heading: 34,
        pitch: 10
      }
    });
    map.setStreetView(panorama);
    google.maps.event.addListener(map, 'mousemove', function (event) {
      document.getElementById('coordinates-panel').innerHTML =
        event.latLng.lat() + ', ' + event.latLng.lng();
    });
    this.spinner.hide();
  }
}
