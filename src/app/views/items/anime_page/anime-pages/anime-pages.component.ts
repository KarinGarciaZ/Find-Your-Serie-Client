import { AnimePageService } from 'app/services/anime-page.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-anime-pages',
  templateUrl: './anime-pages.component.html',
  styleUrls: ['./anime-pages.component.scss']
})
export class AnimePagesComponent implements OnInit {
  public animes: any;
  public filtered: any;

  constructor( private animePageService:AnimePageService ) { }

  ngOnInit() {
    this.getAnimes()
  }

  getAnimes() {
    this.animePageService.getPage( 'anime' )
      .subscribe( animes => {
        this.animes = this.filtered = animes
      })
  }

  updateFilter(input) {
    this.animes = this.filtered.filter( filter => filter.anime.name.toLowerCase().includes(input.toLowerCase()))
  }

  delete( id ) {
    if ( confirm('¿Está seguro de que desea eliminar este anime?')) {
      this.animePageService.delete( id ).subscribe( res =>{
        window.location.reload()
      })
    }
  }

}
