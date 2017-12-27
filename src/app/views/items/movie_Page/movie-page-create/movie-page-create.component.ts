import { MoviePageService } from 'app/services/movie-page.service';
import { MovieService } from 'app/services/movie.service';
import { ToastrService } from 'ngx-toastr';
import { PageService } from 'app/services/page.service';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-movie-page-create',
  templateUrl: './movie-page-create.component.html',
  styleUrls: ['./movie-page-create.component.scss']
})
export class MoviePageCreateComponent implements OnInit {
  pages = []
  movies = []
  filtered = []
  lookImageMovie: string  
  lookImagePage: string
  @ViewChild('urlInput') url: any;
  @ViewChild('capsInput') caps: any;
  @ViewChild('movieInput') movie: any;
  @ViewChild('pageInput') page: any;

  constructor(
    private pageService: PageService,
    private movieService: MovieService,
    private moviePageService: MoviePageService,
    private toastr: ToastrService
  ) { 
    this.pageService.all()
      .subscribe( pages => {        
        this.pages = pages.filter( page => page.type == 3)
      })

    this.movieService.all()
    .subscribe( movies => this.movies = movies)
  }

  filter( movie ) {
    this.filtered = this.movies.filter( filtered => filtered.name.includes( movie ))
  }

  lookImageMovi( id ) {
    if ( id )
      this.filtered.forEach(element => {
        if ( element.id == id ) {
          this.lookImageMovie = element.image;
        }      
      });
  }

  lookImagePag( id ) {
    if ( id )
      this.pages.forEach(element => {
        if ( element.id == id ) {
          this.lookImagePage = element.image;
        }      
      });
  }

  nothing() { }

  ngOnInit() {
  }

  onSubmitMovie( movie ) {
    this.moviePageService.create( movie )
      .subscribe( res => {
        if ( res ) {
          this.showSuccess()
          this.clearInputs()          
        }
      },
      data =>  this.showError(data.error.message),
      () => console.log('Completed'))    
  }

  showSuccess() {
    this.toastr.success('Registro agregado exitosamente', '¡Registro agregado!')
  }

  showError( error ) {
    this.toastr.error(error, '¡Ha numa!')
  }

  clearInputs() {
    this.url.nativeElement.value = ''
    this.page.nativeElement.value = undefined
    this.anime.nativeElement.value = undefined
    this.caps.nativeElement.value = undefined
  }

}
