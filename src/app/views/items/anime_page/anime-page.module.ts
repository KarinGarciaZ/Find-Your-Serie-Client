import { AnimePageEditComponent } from './anime-page-edit/anime-page-edit.component';
import { AnimePagesComponent } from './anime-pages/anime-pages.component';
import { AnimePageCreateComponent } from './anime-page-create/anime-page-create.component';
import { AnimePageComponent } from './anime-page.component';
import { AnimePageRoutingModule } from './anime-page.routing';
import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';



@NgModule({
  imports: [
    AnimePageRoutingModule,
    ChartsModule,
    CommonModule,
    FormsModule
  ],
  declarations: [
    AnimePageComponent,
    AnimePageCreateComponent,
    AnimePagesComponent,
    AnimePageEditComponent
  ]
})
export class AnimePageModule { }
