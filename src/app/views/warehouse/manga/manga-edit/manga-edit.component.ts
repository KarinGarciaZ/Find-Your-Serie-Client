import { MangaService } from 'app/services/manga.service';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { Manga } from 'app/models/manga';

@Component({
  selector: 'app-manga-edit',
  templateUrl: './manga-edit.component.html',
  styleUrls: ['./manga-edit.component.scss']
})
export class MangaEditComponent implements OnInit {
  public id: any;
  public manga: Manga;

  constructor(
    private toastr: ToastrService,
    private mangaService: MangaService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    this.activatedRoute.params.subscribe( params => {
      this.id = params['id']
      if ( this.id ) {
        this.mangaService.findById( this.id )
          .subscribe( manga => console.log('manga: ', manga))     
      }
    })
   }

  ngOnInit() {
  }

}
