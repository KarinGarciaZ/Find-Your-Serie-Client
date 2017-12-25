import { MangaService } from 'app/services/manga.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-manga-create',
  templateUrl: './manga-create.component.html',
  styleUrls: ['./manga-create.component.scss']
})
export class MangaCreateComponent implements OnInit {

  form = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    image: new FormControl('', [Validators.required]),
    quality: new FormControl('', [Validators.required, Validators.max(10), Validators.min(0)])
  });

  constructor( private mangaService: MangaService, private toastr: ToastrService ) { }

  ngOnInit() {
  }

  set name( name ) {
    this.form.controls['name'].setValue(name);
  }

  set image( image ) {
    this.form.controls['image'].setValue(image);
  }

  set quality( quality ) {
    this.form.controls['quality'].setValue(quality);
  }

  get name() {
    return this.form.get('name');
  }

  get image() {
    return this.form.get('image');
  }

  get quality() {
    return this.form.get('quality');
  }

  onSubmitManga() {
    this.mangaService.create( this.form.value )
      .subscribe( res => {
        this.toastr.success('Se registró exitosamente', '¡Registro guardado!')
        this.name.setValue('')
        this.image.setValue('')
        this.quality.setValue(undefined)
      },
      err => this.toastr.error(err.error.message, '¡Chanfle!'),
      () => console.log("Done.")
    )
  }

}
