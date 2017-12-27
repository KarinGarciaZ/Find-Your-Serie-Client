import { Component, OnInit, ViewChild } from '@angular/core';
import { AnimeService } from 'app/services/anime.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-anime-create',
  templateUrl: './anime-create.component.html',
  styleUrls: ['./anime-create.component.scss']
})
export class AnimeCreateComponent implements OnInit {

  constructor(private animeService: AnimeService, private toastr: ToastrService) { }

  ngOnInit() {
  }

  onSubmitAnime( anime ) {
    this.animeService.create( anime )
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
