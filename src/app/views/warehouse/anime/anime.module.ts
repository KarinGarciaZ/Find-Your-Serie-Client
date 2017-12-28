import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { AnimeRoutingModule } from 'app/views/warehouse/anime/anime.routing';
import { AnimesComponent } from './animes/animes.component';
import { AnimeEditComponent } from 'app/views/warehouse/anime/anime-edit/anime-edit.component';
import { AnimeCreateComponent } from 'app/views/warehouse/anime/anime-create/anime-create.component';
import { AnimeComponent } from './anime.component';


@NgModule({
  imports: [
    AnimeRoutingModule,
    ChartsModule,
    CommonModule,
    FormsModule,
    NgxDatatableModule
  ],
  declarations: [
    AnimeComponent,
    AnimeCreateComponent,
    AnimeEditComponent,
    AnimesComponent
  ]
})
export class AnimeModule { }
