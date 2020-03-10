import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TrackingComponent } from './tracking.component';
import { TrafficComponent } from './traffic.component';
import { HeatmapComponent } from './heatmap.component';
import { WeatherComponent } from './weather.component';

const routes: Routes = [
  {
    path: '',
    component: TrackingComponent,
    data: {
      title: 'Tracking'
    }
  },
  {
    path: 'traffic',
    component: TrafficComponent,
    data: {
      title: 'Traffic'
    }
  },
  {
    path: 'weather',
    component: WeatherComponent,
    data: {
      title: 'Weather'
    }
  },
  {
    path: 'heatmap',
    component: HeatmapComponent,
    data: {
      title: 'Heat Map'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrackingRoutingModule { }
