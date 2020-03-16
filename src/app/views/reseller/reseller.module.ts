import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResellerComponent } from './reseller.component';
import { ResellerRoutingModule } from './reseller-routing.module';
import { NgxSpinnerModule } from "ngx-spinner";

@NgModule({
  imports: [
    CommonModule,
    ResellerRoutingModule,
    NgxSpinnerModule
  ],
  declarations: [ResellerComponent]
})
export class ResellerModule { }

