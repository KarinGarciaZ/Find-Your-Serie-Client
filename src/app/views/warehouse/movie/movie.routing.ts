import { MovieComponent } from './../movie/movie.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MovieCreateComponent } from 'app/views/warehouse/movie/movie-create/movie-create.component';
import { MovieEditComponent } from 'app/views/warehouse/movie/movie-edit/movie-edit.component';
import { MoviesComponent } from 'app/views/warehouse/movie/movies/movies.component';

const routes: Routes = [
  {
    path: 'create',
    component: MovieCreateComponent,
    data: {
      title: 'Registrar Película'
    }
  },
  {
    path: 'edit/:id',
    component: MovieEditComponent,
    data: {
      title: 'Editar Película'
    }
  },
  {
    path: 'all',
    component: MoviesComponent,
    data: {
      title: 'Consulta General'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MovieRoutingModule {}