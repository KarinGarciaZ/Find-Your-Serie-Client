import { MangaService } from 'app/services/manga.service';
import { PageService } from 'app/services/page.service';
import { Component, OnInit } from '@angular/core';
import { MangaPageService } from 'app/services/manga-page.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-manga-page-create',
  templateUrl: './manga-page-create.component.html',
  styleUrls: ['./manga-page-create.component.scss']
})
export class MangaPageCreateComponent implements OnInit {
  pages = []
  mangas = []
  filtered = []
  lookImageManga: string  
  lookImagePage: string

  constructor(
    private pageService: PageService,
    private mangaService: MangaService, 
    private mangaPageService: MangaPageService, 
    private toastr: ToastrService
  ) {
    this.pageService.all()
      .subscribe( pages => {        
        this.pages = pages.filter( page => page.type == "Manga")
      })

    this.mangaService.all()
      .subscribe( mangas => this.mangas = mangas)
   }

   filter( manga ) {
    this.filtered = this.mangas.filter( filtered => filtered.name.toLowerCase().includes( manga.toLowerCase() ))
  }

  lookImageMang( id ) {
    if ( id )
      this.filtered.forEach(element => {
        if ( element.id == id ) {
          this.lookImageManga = element.image;
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

  onSubmitManga( manga ) {
    this.mangaPageService.create( manga )
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
