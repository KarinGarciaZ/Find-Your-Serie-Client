import { Component, OnInit, ViewChild } from '@angular/core';
import { AnimeService } from 'app/services/anime.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-anime-create',
  templateUrl: './anime-create.component.html',
  styleUrls: ['./anime-create.component.scss']
})
export class AnimeCreateComponent implements OnInit {
  @ViewChild('nameInput') name: any;
  @ViewChild('imageInput') image: any;
  @ViewChild('qualityInput') quality: any;

  constructor(private animeService: AnimeService, private toastr: ToastrService) { }

  ngOnInit() {
  }

  onSubmitAnime( anime ) {
    this.animeService.create( anime )
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
    this.name.nativeElement.value = ''
    this.image.nativeElement.value = ''
    this.quality.nativeElement.value = undefined
  }

}
