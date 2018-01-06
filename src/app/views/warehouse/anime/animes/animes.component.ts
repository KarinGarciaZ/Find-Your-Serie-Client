import { AnimeService } from 'app/services/anime.service';
import { Component, OnInit } from '@angular/core';
import { DatatableComponent } from '@swimlane/ngx-datatable/src/components/datatable.component';

@Component({
  selector: 'app-animes',
  templateUrl: './animes.component.html',
  styleUrls: ['./animes.component.scss']
})
export class AnimesComponent implements OnInit {
  public animes: any;
  public filtered: any;

  constructor( private animeService: AnimeService ) {
    this.getAnimes()
   }

  ngOnInit() {
  }

  getAnimes() {
    this.animeService.all()
      .subscribe( res => this.animes = this.filtered = res )
  }

  updateFilter( input ) {
    this.animes = this.filtered.filter( filter => filter.name.toLowerCase().includes(input.toLowerCase()))
  }

  delete( id ) {
    if ( confirm('¿Está seguro de que desea eliminar este anime?')) {
      this.animeService.delete( id ).subscribe( res =>{
        window.location.reload()
      })
    }
  }

}
