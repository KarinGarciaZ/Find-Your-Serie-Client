import { AnimePageService } from 'app/services/anime-page.service';
import { PageService } from 'app/services/page.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements OnInit {
  pages = []
  filtered: Observable<any[]>
  
  constructor(private pageService: PageService, private animePageService: AnimePageService) { 
    this.getPages()
  }

  getPages() {
    this.filtered = this.pageService.all()
    this.pageService.all()
      .subscribe( res => this.pages = res )

  }

  filter( value ){
    this.pages = this.pages.filter( item => item.name.toLowerCase().includes(value.toLowerCase()))
  }

  ngOnInit() {
  }

  delete( id ) {
    if ( confirm('¿Está seguro de que desea eliminar esta página?  Esto hará que todas las películas, series, animes o mangas que pertenezcan a esta página también se eliminen.')) {
      this.pageService.delete( id ).subscribe( res =>{
        this.getPages()
      })
    }
  }

}
