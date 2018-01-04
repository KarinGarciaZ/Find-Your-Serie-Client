import { SeriePagesComponent } from './serie-pages/serie-pages.component';
import { SeriePageEditComponent } from './serie-page-edit/serie-page-edit.component';
import { SeriePageCreateComponent } from './serie-page-create/serie-page-create.component';
import { SeriePageComponent } from './serie-page.component';
import { SeriePageRoutingModule } from './serie-page.routing';

import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';


@NgModule({
  imports: [
    SeriePageRoutingModule,
    ChartsModule,
    CommonModule,
    FormsModule,
    NgxDatatableModule
  ],
  declarations: [
    SeriePageComponent,
    SeriePageCreateComponent,
    SeriePageEditComponent,
    SeriePagesComponent
  ]
})
export class SeriePageModule { }
