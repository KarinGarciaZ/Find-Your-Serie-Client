import { AnimePageService, AnimePageService } from 'app/services/anime-page.service';
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

  constructor( private animeService: AnimeService, private animePageService: AnimePageService ) {
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
      this.animeService.delete( id ).subscribe( () =>{ })
      this.animePageService.getToDelete( id ).subscribe(arr => {
        arr.forEach( (element, index) => {
          this.animePageService.delete( element.id ).subscribe( () => console.log('Deleted') )
          if ( index == arr.length-1 )
            window.location.reload()
        });
      })  
    }
  }

}
