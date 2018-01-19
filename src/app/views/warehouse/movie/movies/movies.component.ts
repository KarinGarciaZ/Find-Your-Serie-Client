import { MoviePageService } from './../../../../services/movie-page.service';
import { Component, OnInit } from '@angular/core';
import { MovieService } from 'app/services/movie.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  public movies: any;
  public filtered: any;

  constructor( private movieService: MovieService, private moviePageService: MoviePageService ) {
    this.getMovies()
   }

  ngOnInit() {
  }

  getMovies() {
    this.movieService.all()
      .subscribe( movies => this.movies = this.filtered = movies )
  }

  updateFilter(input) {
    this.movies = this.filtered.filter( filter => filter.name.toLowerCase().includes(input.toLowerCase()))
  }

  delete( id ) {
    if ( confirm('¿Está seguro de que desea eliminar este anime?')) {
      this.movieService.delete( id ).subscribe( () =>{ })
      this.moviePageService.getToDelete( id ).subscribe(arr => {
        arr.forEach( (element, index) => {
          this.moviePageService.delete( element.id ).subscribe( () => console.log('Deleted') )
          if ( index == arr.length-1 )
            window.location.reload()
        });
      })  
    }
  }

}
