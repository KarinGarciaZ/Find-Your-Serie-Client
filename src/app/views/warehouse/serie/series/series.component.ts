import { SeriePageService } from './../../../../services/serie-page.service';
import { Component, OnInit } from '@angular/core';
import { SerieService } from 'app/services/serie.service';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.scss']
})
export class SeriesComponent implements OnInit {
  public series: any;
  public filtered: any;

  constructor( private serieService: SerieService, private seriePageService: SeriePageService ) { 
    this.getSeries()
  }

  ngOnInit() {
  }

  getSeries() {
    this.serieService.all()
      .subscribe( series => this.series = this.filtered = series )
  }

  updateFilter(input) {
    this.series = this.filtered.filter( filter => filter.name.toLowerCase().includes(input.toLowerCase()))
  }

  delete( id ) {
    if ( confirm('¿Está seguro de que desea eliminar este anime?')) {
      this.serieService.delete( id ).subscribe( () =>{ })
      this.seriePageService.getToDelete( id ).subscribe(arr => {
        arr.forEach( (element, index) => {
          this.seriePageService.delete( element.id ).subscribe( () => console.log('Deleted') )
          if ( index == arr.length-1 )
            window.location.reload()
        });
      })  
    }
  }

}
