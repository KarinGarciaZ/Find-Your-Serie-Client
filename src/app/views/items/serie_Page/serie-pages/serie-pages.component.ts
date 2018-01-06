import { Component, OnInit } from '@angular/core';
import { SeriePageService } from 'app/services/serie-page.service';

@Component({
  selector: 'app-serie-pages',
  templateUrl: './serie-pages.component.html',
  styleUrls: ['./serie-pages.component.scss']
})
export class SeriePagesComponent implements OnInit {
  public series: any;
  public filtered: any;
  
  constructor( private seriePageService: SeriePageService ) { }

  ngOnInit() {
    this.getSeries()
  }

  getSeries() {
    this.seriePageService.getPage( 'serie' )
      .subscribe( series => {
        this.series = this.filtered = series
      })
  }

  updateFilter(input) {
    this.series = this.filtered.filter( filter => filter.serie.name.toLowerCase().includes(input.toLowerCase()))
  }

  delete( id ) {
    if ( confirm('¿Está seguro de que desea eliminar este anime?')) {
      this.seriePageService.delete( id ).subscribe( res =>{
        window.location.reload()
      })
    }
  }

}
