import { Component, OnInit } from '@angular/core';
import { Event as RouterEvent, Router, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from "@angular/router";
import { Location } from "@angular/common";
import { ConstantsService } from './common/services/constants.service';

declare var $: any;
console.log(`jQuery version: ${$.fn.jquery}`);

@Component({
  // tslint:disable-next-line
  selector: 'body',
  //template: '<div *ngIf="loading" class="lds-roller"><div></div><div></div><div></div><div></div></div><div *ngIf="!loading"><router-outlet></router-outlet></div>',
  template: '<router-outlet></router-outlet>'
})
export class AppComponent implements OnInit {
  title = "TRACK";
  loading = true;
  route: string;

  constructor(private _constant: ConstantsService, location: Location, private router: Router) {

    this.router.events.subscribe((event: RouterEvent) => {

      if (location.path() != "") {
        this.route = location.path();
      }

    });

  }


  ngOnInit() {


  }

}
