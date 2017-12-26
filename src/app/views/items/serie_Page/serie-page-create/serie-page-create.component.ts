import { ToastrService } from 'ngx-toastr';
import { SeriePageService } from 'app/services/serie-page.service';
import { SerieService } from 'app/services/serie.service';
import { PageService } from 'app/services/page.service';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-serie-page-create',
  templateUrl: './serie-page-create.component.html',
  styleUrls: ['./serie-page-create.component.scss']
})
export class SeriePageCreateComponent implements OnInit {
  pages = []
  series = []
  @ViewChild('urlInput') url: any;
  @ViewChild('capsInput') caps: any;
  @ViewChild('serieInput') serie: any;
  @ViewChild('pageInput') page: any;

  constructor(
    private pageService: PageService,
    private serieService: SerieService, 
    private seriePageService: SeriePageService, 
    private toastr: ToastrService
  ) { 
    this.pageService.all()
      .subscribe( pages => {        
        this.pages = pages.filter( page => page.type == 4)
      })

    this.serieService.all()
    .subscribe( series => this.series = series)
  }

  ngOnInit() {
  }

  onSubmitSerie( serie ) {
    this.seriePageService.create( serie )
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
    this.serie.nativeElement.value = undefined
    this.caps.nativeElement.value = undefined
  }

}
