import { MangaPageService } from 'app/services/manga-page.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manga-pages',
  templateUrl: './manga-pages.component.html',
  styleUrls: ['./manga-pages.component.scss']
})
export class MangaPagesComponent implements OnInit {
  public mangas: any;
  public filtered: any;

  constructor( private mangaPageService: MangaPageService ) { }

  ngOnInit() {
    this.getMangas()
  }

  getMangas() {
    this.mangaPageService.getPage( 'manga' )
      .subscribe( mangas => {
        this.mangas = this.filtered = mangas
      })
  }

  updateFilter(input) {
    this.mangas = this.filtered.filter( filter => filter.manga.name.toLowerCase().includes(input.toLowerCase()))
  }

  delete( id ) {
    if ( confirm('¿Está seguro de que desea eliminar este anime?')) {
      this.mangaPageService.delete( id ).subscribe( res =>{
        window.location.reload()
      })
    }
  }

}
