import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { PageEditComponent } from './page-edit/page-edit.component';
import { PageCreateComponent } from './page-create/page-create.component';
import { PageComponent } from 'app/views/warehouse/page/page.component';
import { PagesComponent } from 'app/views/warehouse/page/pages/pages.component';
import { PageRoutingModule } from 'app/views/warehouse/page/page.routing';


@NgModule({
  imports: [
    PageRoutingModule,
    ChartsModule,
    CommonModule,
    FormsModule
  ],
  declarations: [
    PageComponent,
    PageCreateComponent,
    PageEditComponent,
    PagesComponent
  ]
})
export class PageModule { }
