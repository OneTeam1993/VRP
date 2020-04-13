import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessagesComponent } from './messages.component';
import { MessagesRoutingModule } from './messages-routing.module';
import { NgxSpinnerModule } from "ngx-spinner";

@NgModule({
  imports: [
    CommonModule,
    MessagesRoutingModule,
    NgxSpinnerModule
  ],
  declarations: [MessagesComponent]
})
export class MessagesModule { }

