import { SeriePageService } from 'app/services/serie-page.service';
import { Page } from 'app/models/page';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { SerieService } from 'app/services/serie.service';
import { PageService } from 'app/services/page.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-serie-page-edit',
  templateUrl: './serie-page-edit.component.html',
  styleUrls: ['./serie-page-edit.component.scss']
})
export class SeriePageEditComponent implements OnInit {
  public id: any;
  public serie: any;
  public seriePage: any;
  public pages: Page[];
  public lookImagePage: string

  constructor(
    private toastr: ToastrService,
    private serieService: SerieService,
    private pageService: PageService,
    private seriePageService: SeriePageService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    this.activatedRoute.params.subscribe( params => {
      this.id = params['id']
      if ( this.id ) {
        this.getSeriePage()
        this.getPages()
      }
    })
   }

  ngOnInit() {
  }

  nothing() {}
  
  getSeriePage() {
    this.seriePageService.findById( this.id )
      .subscribe( serie => {
        this.seriePage = serie  
        this.getSerie()        
      }) 
  }

  getSerie() {
    this.serieService.findById( this.seriePage.serieId )
      .subscribe( serie => {
        this.serie = serie                
      }) 
  }

  getPages() {
    this.pageService.all()
      .subscribe( pages => {
        this.pages = pages.filter( page => page.type == "Serie")
        this.lookImagePag( this.seriePage.pageId )
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

  onSubmitSerie() {
    this.seriePageService.update( this.seriePage )
      .subscribe( res => this.showSuccess(),
      err => this.showError(err),
      () => console.log('Done.')
    )
  }

  showSuccess() {
    this.router.navigate(['/items/serie-page/all']);
    this.toastr.success('Se editó exitosamente', '¡Registro editado!')
  }

  showError( err ) {
    this.toastr.error( err.error.message, '¡Chanfle!' )
  }

}
