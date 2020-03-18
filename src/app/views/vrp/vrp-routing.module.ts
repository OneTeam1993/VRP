import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VrpComponent } from './vrp.component';
import { TspComponent } from './tsp.component';

const routes: Routes = [
  {
    path: '',
    component: VrpComponent,
    data: {
      title: 'Standard Vehicle Routing Problem'
    }
  },
  {
    path: 'tsp',
    component: TspComponent,
    data: {
      title: 'Travelling Salesman Problem'
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VrpRoutingModule { }
