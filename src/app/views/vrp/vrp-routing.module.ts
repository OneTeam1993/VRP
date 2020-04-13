import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VrpComponent } from './vrp.component';
import { TspComponent } from './tsp.component';
import { DirectionComponent } from './direction.component';

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
  {
    path: 'direction',
    component: DirectionComponent,
    data: {
      title: 'Directions'
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VrpRoutingModule { }
