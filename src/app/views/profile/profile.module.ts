import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { DataTablesModule } from 'angular-datatables';
import { ModalModule } from "ngx-bootstrap";
import { ProfileComponent } from './profile.component';
import { ProfileRoutingModule } from './profile-routing.module';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ChartsModule,
    BsDropdownModule,
    ButtonsModule.forRoot(),
    ProfileRoutingModule,
    DataTablesModule,
    ModalModule.forRoot(),
    NgbModule
  ],
  providers: [NgbActiveModal],
  declarations: [ProfileComponent],
  entryComponents: [],
})
export class ProfileModule { }
