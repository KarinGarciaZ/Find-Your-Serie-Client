import { MoviePagesComponent } from './movie-pages/movie-pages.component';
import { MoviePageEditComponent } from './movie-page-edit/movie-page-edit.component';
import { MoviePageCreateComponent } from './movie-page-create/movie-page-create.component';
import { MoviePageComponent } from './movie-page.component';
import { MoviePageRoutingModule } from './movie-page.routing';

import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';



@NgModule({
  imports: [
    MoviePageRoutingModule,
    ChartsModule,
    CommonModule,
    FormsModule
  ],
  declarations: [
    MoviePageComponent,
    MoviePageCreateComponent,
    MoviePageEditComponent,
    MoviePagesComponent
  ]
})
export class MoviePageModule { }
