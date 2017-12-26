import { SeriePageComponent } from './serie-page.component';
import { SeriePagesComponent } from './serie-pages/serie-pages.component';
import { SeriePageEditComponent } from './serie-page-edit/serie-page-edit.component';
import { SeriePageCreateComponent } from './serie-page-create/serie-page-create.component';


import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'create',
    component: SeriePageCreateComponent,
    data: {
      title: 'Registrar Serie'
    }
  },
  {
    path: 'edit',
    component: SeriePageEditComponent,
    data: {
      title: 'Editar Serie'
    }
  },
  {
    path: 'all',
    component: SeriePagesComponent,
    data: {
      title: 'Consulta General'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SeriePageRoutingModule {}