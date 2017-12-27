import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'anime-page',
    loadChildren: './anime_page/anime-page.module#AnimePageModule'
  },
  {
    path: 'serie-page',
    loadChildren: './serie_page/serie-page.module#SeriePageModule'
  },
  {
    path: 'movie-page',
    loadChildren: './movie_page/movie-page.module#MoviePageModule'
  },
  {
    path: 'manga-page',
    loadChildren: './manga_page/manga-page.module#MangaPageModule'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ItemsRoutingModule {}