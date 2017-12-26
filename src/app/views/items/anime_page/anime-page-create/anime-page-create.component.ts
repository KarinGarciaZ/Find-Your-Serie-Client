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
  @ViewChild('urlInput') url: any;
  @ViewChild('capsInput') caps: any;
  @ViewChild('animeInput') anime: any;
  @ViewChild('pageInput') page: any;

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

  ngOnInit() {
  }

  onSubmitAnime( anime ) {
    this.animePageService.create( anime )
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
    this.anime.nativeElement.value = undefined
    this.caps.nativeElement.value = undefined
  }

}
