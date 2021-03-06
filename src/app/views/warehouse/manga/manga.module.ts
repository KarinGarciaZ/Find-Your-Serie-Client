import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { MangaCreateComponent } from 'app/views/warehouse/manga/manga-create/manga-create.component';
import { MangaEditComponent } from 'app/views/warehouse/manga/manga-edit/manga-edit.component';
import { MangasComponent } from 'app/views/warehouse/manga/mangas/mangas.component';
import { MangaComponent } from './manga.component';
import { MangaRoutingModule } from './manga.routing';

@NgModule({
  imports: [
    MangaRoutingModule,
    ChartsModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgxDatatableModule
  ],
  declarations: [
    MangaComponent,
    MangaCreateComponent,
    MangaEditComponent,
    MangasComponent
  ]
})
export class MangaModule { }
