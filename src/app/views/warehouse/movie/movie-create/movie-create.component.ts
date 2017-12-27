import { MovieService } from 'app/services/movie.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-movie-create',
  templateUrl: './movie-create.component.html',
  styleUrls: ['./movie-create.component.scss']
})
export class MovieCreateComponent implements OnInit {
  
  constructor(private movieService: MovieService, private toastr: ToastrService) { }

  ngOnInit() {
  }

  onSubmitMovie( movie ) {
    this.movieService.create( movie )
      .subscribe( res => {
        if ( res ) {
          this.showSuccess()         
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
}
