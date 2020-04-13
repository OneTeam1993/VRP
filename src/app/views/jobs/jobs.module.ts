import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { JobBasicComponent } from './basic.component';
import { JobsRoutingModule } from './jobs-routing.module';
import { DataTablesModule } from 'angular-datatables';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { NgxSpinnerModule } from "ngx-spinner";


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ChartsModule,
    BsDropdownModule,
    ButtonsModule.forRoot(),
    JobsRoutingModule,
    DataTablesModule,
    CarouselModule.forRoot(),
    NgxSpinnerModule
  ],
  declarations: [JobBasicComponent]
})
export class JobsModule { }
