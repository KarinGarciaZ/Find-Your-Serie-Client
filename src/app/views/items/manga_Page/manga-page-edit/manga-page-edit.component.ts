import { Page } from 'app/models/page';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { MangaService } from 'app/services/manga.service';
import { PageService } from 'app/services/page.service';
import { MangaPageService } from 'app/services/manga-page.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-manga-page-edit',
  templateUrl: './manga-page-edit.component.html',
  styleUrls: ['./manga-page-edit.component.scss']
})
export class MangaPageEditComponent implements OnInit {
  public id: any;
  public manga: any;
  public mangaPage: any;
  public pages: Page[];
  public lookImagePage: string

  constructor(
    private toastr: ToastrService,
    private mangaService: MangaService,
    private pageService: PageService,
    private mangaPageService: MangaPageService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { 
    this.activatedRoute.params.subscribe( params => {
      this.id = params['id']
      if ( this.id ) {
        this.getMangaPage()
        this.getPages()
      }
    })   
  }

  ngOnInit() {
  }

  nothing() {}
  
  getMangaPage() {
    this.mangaPageService.findById( this.id )
      .subscribe( manga => {
        this.mangaPage = manga  
        this.getManga()        
      }) 
  }

  getManga() {
    this.mangaService.findById( this.mangaPage.mangaId )
      .subscribe( manga => {
        this.manga = manga                
      }) 
  }

  getPages() {
    this.pageService.all()
      .subscribe( pages => {
        this.pages = pages.filter( page => page.type == "Manga")
        this.lookImagePag( this.mangaPage.pageId )
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

  onSubmitManga() {
    this.mangaPageService.update( this.mangaPage )
      .subscribe( res => this.showSuccess(),
      err => this.showError(err),
      () => console.log('Done.')
    )
  }

  showSuccess() {
    this.router.navigate(['/items/manga-page/all']);
    this.toastr.success('Se editó exitosamente', '¡Registro editado!')
  }

  showError( err ) {
    this.toastr.error( err.error.message, '¡Chanfle!' )
  }

}
