import { MovieService } from 'app/services/movie.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-movie-create',
  templateUrl: './movie-create.component.html',
  styleUrls: ['./movie-create.component.scss']
})
export class MovieCreateComponent implements OnInit {
  @ViewChild('nameInput') name: any;
  @ViewChild('imageInput') image: any;
  @ViewChild('qualityInput') quality: any;
  constructor(private movieService: MovieService, private toastr: ToastrService) { }

  ngOnInit() {
  }

  onSubmitMovie( movie ) {
    this.movieService.create( movie )
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
    this.name.nativeElement.value = ''
    this.image.nativeElement.value = ''
    this.quality.nativeElement.value = undefined
  }

}
