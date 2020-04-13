import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TrackingComponent } from './tracking.component';
import { TrafficComponent } from './traffic.component';
import { HeatmapComponent } from './heatmap.component';
import { WeatherComponent } from './weather.component';
import { CarparkComponent } from './carpark.component';
import { StreetComponent } from './street.component';

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
    path: 'carpark',
    component: CarparkComponent,
    data: {
      title: 'Carpark'
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
  },
  {
    path: 'street',
    component: StreetComponent,
    data: {
      title: 'Street Map'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrackingRoutingModule { }
