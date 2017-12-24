import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'anime',
    loadChildren: './anime/anime.module#AnimeModule'
  },
  {
    path: 'page',
    loadChildren: './page/page.module#PageModule'
  }
  // ,
  // {
  //   path: 'manga',
  //   loadChildren: './manga/manga.module#MangaModule'
  // },
  // {
  //   path: 'serie',
  //   loadChildren: './serie/serie.module#SerieModule'
  // },
  // {
  //   path: 'movie',
  //   loadChildren: './movie/movie.module#MovieModule'
  // },
  // {
  //   path: 'page',
  //   loadChildren: './page/page.module#PageModule'
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WarehouseRoutingModule {}