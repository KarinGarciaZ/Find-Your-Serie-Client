import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PagesComponent } from 'app/views/warehouse/page/pages/pages.component';
import { PageCreateComponent } from 'app/views/warehouse/page/page-create/page-create.component';
import { PageEditComponent } from 'app/views/warehouse/page/page-edit/page-edit.component';

const routes: Routes = [
  {
    path: 'create',
    component: PageCreateComponent,
    data: {
      title: 'Registrar Página'
    }
  },
  {
    path: 'edit/:id',
    component: PageEditComponent,
    data: {
      title: 'Editar Página'
    }
  },
  {
    path: 'all',
    component: PagesComponent,
    data: {
      title: 'Consulta General'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageRoutingModule {}