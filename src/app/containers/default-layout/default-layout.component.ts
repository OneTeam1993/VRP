import { Component, OnInit } from '@angular/core';
import { navItems } from '../../_nav';
import 'moment/locale/en-SG';
import { ConstantsService } from '../../common/services/constants.service';

declare var $: any; 

@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html',
  styleUrls: ["./default-layout.component.css"]
})

export class DefaultLayoutComponent implements OnInit {
  public sidebarMinimized = false;
  public navItems = navItems;
  username = this._constant.getSessionstorageValueUser;
  company = this._constant.getSessionstorageValueCompany;
  api_reseller = this._constant.getResellers();
  api_company = this._constant.getCompanies();
  default_reseller = this._constant.getSessionstorageValueDefaultReseller;
  default_company = this._constant.getSessionstorageValueDefaultCompany;
  time = new Date();

  constructor(private _constant: ConstantsService) {

  }

  ngOnInit() {

    $.getJSON(this.api_reseller, function (data) {
      $.each(data, function (index, item) {
        if (item.ResellerID == this.default_reseller) {
          $('#load-reseller').append($('<option selected="selected"></option>').val(item.ResellerID).html(item.Name));
        } else {

          $('#load-reseller').append($('<option></option>').val(item.ResellerID).html(item.Name));
        }
      });
      $('.selectpicker').selectpicker('refresh');
    });

    $.getJSON(this.api_company, function (data) {
      $.each(data, function (index, item) {
        if (item.CompanyID == this.default_company) {
          $('#load-company').append($('<option selected="selected"></option>').val(item.CompanyID).html(item.Name));
        } else {
          $('#load-company').append($('<option></option>').val(item.CompanyID).html(item.Name));
        }
      });
      $('.selectpicker').selectpicker('refresh');
    });

    setInterval(() => {
      this.time = new Date();
    }, 1000);

  }
  toggleMinimize(e) {
    this.sidebarMinimized = e;
  }
}
