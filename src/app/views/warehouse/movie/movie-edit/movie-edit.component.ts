import { Router, ActivatedRoute } from '@angular/router';
import { MovieService } from 'app/services/movie.service';
import { Component, OnInit } from '@angular/core';
import { Movie } from 'app/models/movie';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-movie-edit',
  templateUrl: './movie-edit.component.html',
  styleUrls: ['./movie-edit.component.scss']
})
export class MovieEditComponent implements OnInit {
  public id: any;
  public movie: Movie;

  constructor(
    private toastr: ToastrService,
    private movieService: MovieService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { 
    this.activatedRoute.params.subscribe( params => {
      this.id = params['id']
      if ( this.id ) {
        this.movieService.findById( this.id )
          .subscribe( movie => this.movie = movie)     
      }
    })
  }

  ngOnInit() {
  }

  onSubmitMovie() {
    this.movieService.update( this.movie )
      .subscribe( res => this.showSuccess(),
      err => this.showError(err),
      () => console.log('Done.')
    )
  }

  showSuccess() {
    this.router.navigate(['/warehouse/movie/all']);
    this.toastr.success('Se editó exitosamente', '¡Registro editado!')
  }

  showError( err ) {
    this.toastr.error( err.error.message, '¡Chanfle!' )
  }

}
