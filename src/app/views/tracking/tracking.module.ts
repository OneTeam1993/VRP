import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';

import { TrackingComponent } from './tracking.component';
import { TrackingRoutingModule } from './tracking-routing.module';
import { DataTablesModule } from 'angular-datatables';
import { TrafficComponent } from './traffic.component';
import { HeatmapComponent } from './heatmap.component';
import { WeatherComponent } from './weather.component';
import { CarparkComponent } from './carpark.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { NgxSpinnerModule } from "ngx-spinner";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ChartsModule,
    BsDropdownModule,
    ButtonsModule.forRoot(),
    TrackingRoutingModule,
    DataTablesModule,
    CarouselModule.forRoot(),
    NgxSpinnerModule
  ],
  declarations: [TrackingComponent, TrafficComponent, HeatmapComponent, WeatherComponent, CarparkComponent]
})
export class TrackingModule { }
