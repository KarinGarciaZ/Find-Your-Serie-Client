import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { SerieRoutingModule } from 'app/views/warehouse/serie/serie.routing';
import { SerieCreateComponent } from 'app/views/warehouse/serie/serie-create/serie-create.component';
import { SerieEditComponent } from 'app/views/warehouse/serie/serie-edit/serie-edit.component';
import { SeriesComponent } from './series/series.component';
import { SerieComponent } from './serie.component';


@NgModule({
  imports: [
    SerieRoutingModule,
    ChartsModule,
    CommonModule,
    FormsModule
  ],
  declarations: [
    SerieComponent,
    SeriesComponent,
    SerieCreateComponent,
    SerieEditComponent
  ]
})
export class SerieModule { }
