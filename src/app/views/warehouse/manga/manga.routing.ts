import { MangaComponent } from './manga.component';
import { MangaCreateComponent } from './manga-create/manga-create.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MangaEditComponent } from 'app/views/warehouse/manga/manga-edit/manga-edit.component';
import { MangasComponent } from 'app/views/warehouse/manga/mangas/mangas.component';


const routes: Routes = [
  {
    path: 'create',
    component: MangaCreateComponent,
    data: {
      title: 'Registrar manga'
    }
  },
  {
    path: 'edit',
    component: MangaEditComponent,
    data: {
      title: 'Editar manga'
    }
  },
  {
    path: 'all',
    component: MangasComponent,
    data: {
      title: 'Consulta General'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MangaRoutingModule {}