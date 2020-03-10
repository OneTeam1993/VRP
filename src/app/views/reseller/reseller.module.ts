import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResellerComponent } from './reseller.component';
import { ResellerRoutingModule } from './reseller-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ResellerRoutingModule
  ],
  declarations: [ResellerComponent]
})
export class ResellerModule { }

