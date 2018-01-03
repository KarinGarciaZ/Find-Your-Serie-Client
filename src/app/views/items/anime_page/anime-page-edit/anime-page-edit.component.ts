import { Page } from './../../../../models/page';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AnimeService } from 'app/services/anime.service';
import { PageService } from 'app/services/page.service';
import { AnimePageService } from 'app/services/anime-page.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-anime-page-edit',
  templateUrl: './anime-page-edit.component.html',
  styleUrls: ['./anime-page-edit.component.scss']
})
export class AnimePageEditComponent implements OnInit {
  public id: any;
  public anime: any;
  public animePage: any;
  public pages: Page[];
  public lookImagePage: string

  constructor(
    private toastr: ToastrService,
    private animeService: AnimeService,
    private pageService: PageService,
    private animePageService: AnimePageService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    this.activatedRoute.params.subscribe( params => {
      this.id = params['id']
      if ( this.id ) {
        this.getAnimePage()
        this.getPages()
      }
    })    
   }

  ngOnInit() {
  }

  nothing() {}
  
    getAnimePage() {
      this.animePageService.findById( this.id )
        .subscribe( anime => {
          this.animePage = anime  
          this.getAnime()        
        }) 
    }
  
    getAnime() {
      this.animeService.findById( this.animePage.animeId )
        .subscribe( anime => {
          this.anime = anime                
        }) 
    }
  
    getPages() {
      this.pageService.all()
        .subscribe( pages => {
          this.pages = pages.filter( page => page.type == "Anime")
          this.lookImagePag( this.animePage.pageId )
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
  
    onSubmitAnime() {
      this.animePageService.update( this.animePage )
        .subscribe( res => this.showSuccess(),
        err => this.showError(err),
        () => console.log('Done.')
      )
    }
  
    showSuccess() {
      this.router.navigate(['/items/anime-page/all']);
      this.toastr.success('Se editó exitosamente', '¡Registro editado!')
    }
  
    showError( err ) {
      this.toastr.error( err.error.message, '¡Chanfle!' )
    }

}
