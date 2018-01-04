import { MangaPagesComponent } from './manga-pages/manga-pages.component';
import { MangaPageEditComponent } from './manga-page-edit/manga-page-edit.component';
import { MangaPageCreateComponent } from './manga-page-create/manga-page-create.component';
import { MangaPageComponent } from 'app/views/items/manga_page/manga-page.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'create',
    component: MangaPageCreateComponent,
    data: {
      title: 'Registrar Manga'
    }
  },
  {
    path: 'edit/:id',
    component: MangaPageEditComponent,
    data: {
      title: 'Editar Manga'
    }
  },
  {
    path: 'all',
    component: MangaPagesComponent,
    data: {
      title: 'Consulta General'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MangaPageRoutingModule {}