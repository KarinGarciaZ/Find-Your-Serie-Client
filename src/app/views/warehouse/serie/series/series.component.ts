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

  constructor( private serieService: SerieService ) { 
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

}
