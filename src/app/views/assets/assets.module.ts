import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AssetsComponent } from './assets.component';
import { AssetsRoutingModule } from './assets-routing.module';

@NgModule({
  imports: [
    CommonModule,
    AssetsRoutingModule
  ],
  declarations: [AssetsComponent]
})
export class AssetsModule { }

