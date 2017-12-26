import { MoviePageComponent } from './movie-page.component';
import { MoviePagesComponent } from './movie-pages/movie-pages.component';
import { MoviePageEditComponent } from './movie-page-edit/movie-page-edit.component';
import { MoviePageCreateComponent } from './movie-page-create/movie-page-create.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'create',
    component: MoviePageCreateComponent,
    data: {
      title: 'Registrar Anime'
    }
  },
  {
    path: 'edit',
    component: MoviePageEditComponent,
    data: {
      title: 'Editar Anime'
    }
  },
  {
    path: 'all',
    component: MoviePagesComponent,
    data: {
      title: 'Consulta General'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoviePageRoutingModule {}