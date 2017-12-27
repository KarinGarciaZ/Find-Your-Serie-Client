import { SerieService } from 'app/services/serie.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-serie-create',
  templateUrl: './serie-create.component.html',
  styleUrls: ['./serie-create.component.scss']
})
export class SerieCreateComponent implements OnInit {

  constructor( private serieService: SerieService, private toastr: ToastrService ) { }

  ngOnInit() {
  }

  onSubmitSerie( serie ) {
    this.serieService.create( serie )
      .subscribe( res => this.showSuccess(),
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
}
