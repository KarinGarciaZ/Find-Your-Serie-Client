import { MoviePageService } from 'app/services/movie-page.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-pages',
  templateUrl: './movie-pages.component.html',
  styleUrls: ['./movie-pages.component.scss']
})
export class MoviePagesComponent implements OnInit {
  public movies: any;
  public filtered: any;

  constructor( private moviePageService: MoviePageService ) {
    this.getMovies()
   }

  ngOnInit() {
  }

  getMovies() {
    this.moviePageService.all()
      .subscribe( movies => this.movies = this.filtered = movies )
  }

  updateFilter(input) {
    this.movies = this.filtered.filter( filter => filter.name.toLowerCase().includes(input.toLowerCase()))
  }

}
