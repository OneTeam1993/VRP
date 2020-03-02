import { Component, OnInit } from '@angular/core';
import { Event as RouterEvent, Router, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from "@angular/router";
import { Location } from "@angular/common";

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

  constructor(location: Location, private router: Router) {

    this.router.events.subscribe((event: RouterEvent) => {

      if (location.path() != "") {
        this.route = location.path();
        //console.log(this.route)
        if (this.route == "/login") {
          this.loading = false;
        } else {
          this.navigationInterceptor(event);
        }
      } else {
        this.loading = false;
        //console.log(this.route)
      }

    });

  }

  // Shows and hides the loading spinner during RouterEvent changes
  navigationInterceptor(event: RouterEvent): void {

    if (event instanceof NavigationStart) {
      this.loading = true;
    }
    if (event instanceof NavigationEnd) {
      setTimeout(() => { // here
        this.loading = false;
      }, 800);
    }

    // Set loading state to false in both of the below events to hide the spinner in case a request fails
    if (event instanceof NavigationCancel) {
      setTimeout(() => { // here
        this.loading = false;
      }, 800);
    }
    if (event instanceof NavigationError) {
      setTimeout(() => { // here
        this.loading = false;
      }, 800);
    }
  }

  ngOnInit() {

    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0);
    });
  }

}
