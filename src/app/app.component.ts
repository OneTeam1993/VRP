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

      let role_id = this._constant.getSessionstorageValueRoleID;

      //==============================Filter===================================// 
      $('#_reports').hide();

      if (this.route == '/reseller' || this.route == '/tracking/traffic' || this.route == '/tracking/weather') {
        $('#_reseller_filter').hide();
        $('#_company_filter').hide();
        $('#_asset_filter').hide();
      }
      else if (this.route == '/companies') {
        $('#_reseller_filter').show();
        $('#_company_filter').hide();
        $('#_asset_filter').hide();
      }
      else {
        $('#_reseller_filter').show();
        $('#_company_filter').show();
        $('#_asset_filter').show();
      }


      if (this.route == '/reports') $('#_reports').show();
      else $('#_reports').hide();


      if (role_id >= 3) {
        $('#_reseller_filter').hide();
        
      }

    //==============================Filter===================================//


      if (location.path() != "") {
        this.route = location.path();
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
