import { AnimePageService } from 'app/services/anime-page.service';
import { AnimeService } from 'app/services/anime.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { PageService } from 'app/services/page.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-anime-page-create',
  templateUrl: './anime-page-create.component.html',
  styleUrls: ['./anime-page-create.component.scss']
})
export class AnimePageCreateComponent implements OnInit {
  pages = []
  animes = []
  filtered = []
  lookImageAnime: string  
  lookImagePage: string

  constructor(
    private pageService: PageService,
    private animeService: AnimeService, 
    private animePageService: AnimePageService, 
    private toastr: ToastrService
  ) {
    this.pageService.all()
      .subscribe( pages => {        
        this.pages = pages.filter( page => page.type == 1)
      })

    this.animeService.all()
      .subscribe( animes => this.animes = animes)
  }

  filter( anime ) {
    this.filtered = this.animes.filter( filtered => filtered.name.includes( anime ))
  }

  lookImageAnim( id ) {
    if ( id )
      this.filtered.forEach(element => {
        if ( element.id == id ) {
          this.lookImageAnime = element.image;
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

  onSubmitAnime( anime ) {
    this.animePageService.create( anime )
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
