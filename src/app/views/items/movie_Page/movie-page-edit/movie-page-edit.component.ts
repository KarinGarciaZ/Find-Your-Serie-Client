import { Page } from 'app/models/page';
import { MoviePageService } from 'app/services/movie-page.service';
import { PageService } from 'app/services/page.service';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { MovieService } from 'app/services/movie.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-movie-page-edit',
  templateUrl: './movie-page-edit.component.html',
  styleUrls: ['./movie-page-edit.component.scss']
})
export class MoviePageEditComponent implements OnInit {
  public id: any;
  public movie: any;
  public moviePage: any;
  public pages: Page[];
  public lookImagePage: string

  constructor(
    private toastr: ToastrService,
    private movieService: MovieService,
    private pageService: PageService,
    private moviePageService: MoviePageService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    this.activatedRoute.params.subscribe( params => {
      this.id = params['id']
      if ( this.id ) {
        this.getMoviePage()
        this.getPages()
      }
    })    
    }

  ngOnInit() {
  }

  nothing() {}

  getMoviePage() {
    this.moviePageService.findById( this.id )
      .subscribe( movie => {
        this.moviePage = movie  
        this.getMovie()        
      }) 
  }

  getMovie() {
    this.movieService.findById( this.moviePage.movieId )
      .subscribe( movie => {
        this.movie = movie                
      }) 
  }

  getPages() {
    this.pageService.all()
      .subscribe( pages => {
        this.pages = pages.filter( page => page.type == "Movie")
        this.lookImagePag( this.moviePage.pageId )
      }) 
  }

  lookImagePag( id ) {
    if ( id )
      this.pages.forEach(element => {
        if ( element.id == id ) {
          this.lookImagePage = element.image;
        }      
      });
  }

  onSubmitMovie() {
    this.moviePageService.update( this.moviePage )
      .subscribe( res => this.showSuccess(),
      err => this.showError(err),
      () => console.log('Done.')
    )
  }

  showSuccess() {
    this.router.navigate(['/items/movie-page/all']);
    this.toastr.success('Se editó exitosamente', '¡Registro editado!')
  }

  showError( err ) {
    this.toastr.error( err.error.message, '¡Chanfle!' )
  }

}
