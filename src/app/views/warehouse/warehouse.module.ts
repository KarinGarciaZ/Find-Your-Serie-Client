import { WarehouseComponent } from './warehouse.component';
import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';

import { WarehouseRoutingModule } from './warehouse.routing';

@NgModule({
  imports: [
    WarehouseRoutingModule,
    ChartsModule
  ],
  declarations: [
    WarehouseComponent
  ]
})
export class WarehouseModule { }