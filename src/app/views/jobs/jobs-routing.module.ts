import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JobBasicComponent } from './basic.component';

const routes: Routes = [
  {
    path: '',
    component: JobBasicComponent,
    data: {
      title: 'Schedule Reporting'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JobsRoutingModule { }
