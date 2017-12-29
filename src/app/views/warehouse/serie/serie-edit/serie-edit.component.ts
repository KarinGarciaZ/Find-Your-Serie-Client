import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { SerieService } from 'app/services/serie.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Serie } from 'app/models/serie';

@Component({
  selector: 'app-serie-edit',
  templateUrl: './serie-edit.component.html',
  styleUrls: ['./serie-edit.component.scss']
})
export class SerieEditComponent implements OnInit {
  public id: any;
  public serie: Serie;

  constructor(
    private toastr: ToastrService,
    private serieService: SerieService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { 
    this.activatedRoute.params.subscribe( params => {
      this.id = params['id']
      if ( this.id ) {
        this.serieService.findById( this.id )
          .subscribe( serie => this.serie = serie)     
      }
    })
  }

  ngOnInit() {
  }

  onSubmitSerie() {
    this.serieService.update( this.serie )
      .subscribe( res => this.showSuccess(),
      err => this.showError(err),
      () => console.log('Done.')
    )
  }

  showSuccess() {
    this.router.navigate(['/warehouse/serie/all']);
    this.toastr.success('Se editó exitosamente', '¡Registro editado!')
  }

  showError( err ) {
    this.toastr.error( err.error.message, '¡Chanfle!' )
  }

}
