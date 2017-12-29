import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AnimeService } from 'app/services/anime.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Anime } from 'app/models/anime';

@Component({
  selector: 'app-anime-edit',
  templateUrl: './anime-edit.component.html',
  styleUrls: ['./anime-edit.component.scss']
})
export class AnimeEditComponent implements OnInit {
  public id: any;
  public anime: Anime;

  constructor(
    private toastr: ToastrService,
    private animeService: AnimeService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { 
    this.activatedRoute.params.subscribe( params => {
      this.id = params['id']
      if ( this.id ) {
        this.animeService.findById( this.id )
          .subscribe( anime => this.anime = anime)     
      }
    })
  }

  ngOnInit() {
  }

  onSubmitAnime() {
    this.animeService.update( this.anime )
      .subscribe( res => this.showSuccess(),
      err => this.showError(err),
      () => console.log('Done.')
    )
  }

  showSuccess() {
    this.router.navigate(['/warehouse/anime/all']);
    this.toastr.success('Se editó exitosamente', '¡Registro editado!')
  }

  showError( err ) {
    this.toastr.error( err.error.message, '¡Chanfle!' )
  }

}
