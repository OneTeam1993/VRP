import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';

import { VrpComponent } from './vrp.component';
import { VrpRoutingModule } from './vrp-routing.module';
import { DataTablesModule } from 'angular-datatables';
import { TspComponent } from './tsp.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { NgxSpinnerModule } from "ngx-spinner";


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ChartsModule,
    BsDropdownModule,
    ButtonsModule.forRoot(),
    VrpRoutingModule,
    DataTablesModule,
    CarouselModule.forRoot(),
    NgxSpinnerModule
  ],
  declarations: [VrpComponent, TspComponent]
})
export class VrpModule { }
