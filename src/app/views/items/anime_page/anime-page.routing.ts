import { AnimePageComponent } from './anime-page.component';
import { AnimePagesComponent } from './anime-pages/anime-pages.component';
import { AnimePageEditComponent } from './anime-page-edit/anime-page-edit.component';
import { AnimePageCreateComponent } from './anime-page-create/anime-page-create.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'create',
    component: AnimePageCreateComponent,
    data: {
      title: 'Registrar Anime'
    }
  },
  {
    path: 'edit/:id',
    component: AnimePageEditComponent,
    data: {
      title: 'Editar Anime'
    }
  },
  {
    path: 'all',
    component: AnimePagesComponent,
    data: {
      title: 'Consulta General'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnimePageRoutingModule {}