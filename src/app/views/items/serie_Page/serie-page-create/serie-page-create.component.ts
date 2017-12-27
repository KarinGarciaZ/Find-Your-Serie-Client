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
  filtered = []
  lookImageSerie: string  
  lookImagePage: string
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

  filter( serie ) {
    this.filtered = this.series.filter( filtered => filtered.name.includes( serie ))
  }

  lookImageSeri( id ) {
    if ( id )
      this.filtered.forEach(element => {
        if ( element.id == id ) {
          this.lookImageSerie = element.image;
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

  onSubmitSerie( serie ) {
    this.seriePageService.create( serie )
      .subscribe( res => {
        if ( res )
          this.showSuccess()
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
