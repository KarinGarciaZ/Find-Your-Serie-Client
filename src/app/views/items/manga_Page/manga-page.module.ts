import { MangaPageEditComponent } from './manga-page-edit/manga-page-edit.component';
import { MangaPageCreateComponent } from './manga-page-create/manga-page-create.component';
import { MangaPageComponent } from './manga-page.component';
import { MangaPageRoutingModule } from './manga-page.routing';
import { MangaPagesComponent } from 'app/views/items/manga_page/manga-pages/manga-pages.component';

import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

@NgModule({
  imports: [
    MangaPageRoutingModule,
    ChartsModule,
    CommonModule,
    FormsModule,
    NgxDatatableModule
  ],
  declarations: [
    MangaPageComponent,
    MangaPageCreateComponent,
    MangaPageEditComponent,
    MangaPagesComponent
  ]
})
export class MangaPageModule { }
