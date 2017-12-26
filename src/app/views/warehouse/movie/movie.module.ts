import { MoviesComponent } from 'app/views/warehouse/movie/movies/movies.component';
import { MovieEditComponent } from 'app/views/warehouse/movie/movie-edit/movie-edit.component';
import { MovieComponent } from './movie.component';
import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MovieRoutingModule } from 'app/views/warehouse/movie/movie.routing';
import { MovieCreateComponent } from 'app/views/warehouse/movie/movie-create/movie-create.component';



@NgModule({
  imports: [
    MovieRoutingModule,
    ChartsModule,
    CommonModule,
    FormsModule
  ],
  declarations: [
    MovieComponent,
    MovieCreateComponent,
    MovieEditComponent,
    MoviesComponent
  ]
})
export class MovieModule { }
