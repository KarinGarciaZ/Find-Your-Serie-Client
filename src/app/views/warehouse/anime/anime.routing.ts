import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AnimeCreateComponent } from 'app/views/warehouse/anime/anime-create/anime-create.component';
import { AnimeEditComponent } from 'app/views/warehouse/anime/anime-edit/anime-edit.component';
import { AnimesComponent } from 'app/views/warehouse/anime/animes/animes.component';
import { AnimeComponent } from 'app/views/warehouse/anime/anime.component';

const routes: Routes = [
  {
    path: 'create',
    component: AnimeCreateComponent,
    data: {
      title: 'Registrar Anime'
    }
  },
  {
    path: 'edit/:id',
    component: AnimeEditComponent,
    data: {
      title: 'Editar Anime'
    }
  },
  {
    path: 'all',
    component: AnimesComponent,
    data: {
      title: 'Consulta General'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnimeRoutingModule {}