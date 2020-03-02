import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';

import { TrackingComponent } from './tracking.component';
import { TrackingRoutingModule } from './tracking-routing.module';
import { DataTablesModule } from 'angular-datatables';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ChartsModule,
    BsDropdownModule,
    ButtonsModule.forRoot(),
    TrackingRoutingModule,
    DataTablesModule
  ],
  declarations: [TrackingComponent]
})
export class TrackingModule { }
