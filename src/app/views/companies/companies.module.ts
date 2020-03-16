import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompaniesComponent } from './companies.component';
import { CompaniesRoutingModule } from './companies-routing.module';
import { NgxSpinnerModule } from "ngx-spinner";

@NgModule({
  imports: [
    CommonModule,
    CompaniesRoutingModule,
    NgxSpinnerModule
  ],
  declarations: [CompaniesComponent]
})
export class CompaniesModule { }

