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

  constructor( private movieService: MovieService ) {
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

}
