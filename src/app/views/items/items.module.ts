import { ItemsRoutingModule } from './items.routing';
import { ItemsComponent } from './items.component';

import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';

@NgModule({
  imports: [
    ItemsRoutingModule,
    ChartsModule
  ],
  declarations: [
    ItemsComponent
  ]
})
export class ItemsModule { }