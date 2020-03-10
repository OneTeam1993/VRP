import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResellerComponent } from './reseller.component';

const routes: Routes = [
  {
    path: '',
    component: ResellerComponent,
    data: {
      title: 'Reseller'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResellerRoutingModule { }
