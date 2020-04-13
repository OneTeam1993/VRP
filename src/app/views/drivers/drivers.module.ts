import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { DataTablesModule } from 'angular-datatables';
import { ModalModule } from "ngx-bootstrap";
import { DriversComponent } from './drivers.component';
import { DriversRoutingModule } from './drivers-routing.module';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { NgxSpinnerModule } from "ngx-spinner";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ChartsModule,
    BsDropdownModule,
    ButtonsModule.forRoot(),
    DriversRoutingModule,
    DataTablesModule,
    ModalModule.forRoot(),
    NgbModule,
    NgxSpinnerModule
  ],
  providers: [NgbActiveModal],
  declarations: [DriversComponent],
  entryComponents: [],
})
export class DriversModule { }
