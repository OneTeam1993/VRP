import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AssetsComponent } from './assets.component';
import { AssetsRoutingModule } from './assets-routing.module';
import { NgxSpinnerModule } from "ngx-spinner";

@NgModule({
  imports: [
    CommonModule,
    AssetsRoutingModule,
    NgxSpinnerModule
  ],
  declarations: [AssetsComponent]
})
export class AssetsModule { }

