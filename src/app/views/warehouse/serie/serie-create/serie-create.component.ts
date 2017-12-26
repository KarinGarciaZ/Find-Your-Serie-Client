import { SerieService } from 'app/services/serie.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-serie-create',
  templateUrl: './serie-create.component.html',
  styleUrls: ['./serie-create.component.scss']
})
export class SerieCreateComponent implements OnInit {
  @ViewChild('nameInput') name: any
  @ViewChild('qualityInput') quality: any
  @ViewChild('imageInput') image: any

  constructor( private serieService: SerieService, private toastr: ToastrService ) { }

  ngOnInit() {
  }

  onSubmitSerie( serie ) {
    this.serieService.create( serie )
      .subscribe( res => {
        this.showSuccess()
        this.clearInputs()
      },
      err => this.showError(err),
      () => console.log('Done.')
    )
  }

  showSuccess() {
    this.toastr.success('Se registró exitosamente', '¡Registro agregado!')
  }

  showError( err ) {
    this.toastr.error( err.error.message, '¡Chanfle!' )
  }

  clearInputs() {
    this.name.nativeElement.value = ''  
    this.image.nativeElement.value = ''
    this.quality.nativeElement.value = undefined
  }

}
