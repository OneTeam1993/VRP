import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportsComponent } from './reports.component';
import { ReportsRoutingModule } from './reports-routing.module';
import { NgxSpinnerModule } from "ngx-spinner";

@NgModule({
  imports: [
    CommonModule,
    ReportsRoutingModule,
    NgxSpinnerModule
  ],
  declarations: [ReportsComponent]
})
export class ReportsModule { }
