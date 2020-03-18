import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { DataTablesModule } from 'angular-datatables';
import { ModalModule } from "ngx-bootstrap";
import { UsersComponent } from './users.component';
import { UsersRoutingModule } from './users-routing.module';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ChartsModule,
    BsDropdownModule,
    ButtonsModule.forRoot(),
    UsersRoutingModule,
    DataTablesModule,
    ModalModule.forRoot(),
    NgbModule
  ],
  providers: [NgbActiveModal],
  declarations: [UsersComponent],
  entryComponents: [],
})
export class UsersModule { }
