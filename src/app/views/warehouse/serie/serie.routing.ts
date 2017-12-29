import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SerieEditComponent } from 'app/views/warehouse/serie/serie-edit/serie-edit.component';
import { SeriesComponent } from './series/series.component';
import { SerieCreateComponent } from './serie-create/serie-create.component';
import { SerieComponent } from 'app/views/warehouse/serie/serie.component';

const routes: Routes = [
  {
    path: 'create',
    component: SerieCreateComponent,
    data: {
      title: 'Registrar Serie'
    }
  },
  {
    path: 'edit/:id',
    component: SerieEditComponent,
    data: {
      title: 'Editar Serie'
    }
  },
  {
    path: 'all',
    component: SeriesComponent,
    data: {
      title: 'Consulta General'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SerieRoutingModule {}