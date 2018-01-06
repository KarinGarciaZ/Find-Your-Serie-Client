import { MangaService } from 'app/services/manga.service';
import { Component, OnInit } from '@angular/core';
import { DatatableComponent } from '@swimlane/ngx-datatable/src/components/datatable.component';

@Component({
  selector: 'app-mangas',
  templateUrl: './mangas.component.html',
  styleUrls: ['./mangas.component.scss']
})
export class MangasComponent implements OnInit {
  public mangas: any;
  public filtered: any;
  
  constructor( private mangaService: MangaService ) {
    this.getMangas();
   }

   getMangas() {
    this.mangaService.all()
    .subscribe( res => this.mangas = this.filtered = res )
   }

  ngOnInit() {
  }

  updateFilter(input) {
    this.mangas = this.filtered.filter( filter => filter.name.toLowerCase().includes(input.toLowerCase()))
  }

  delete( id ) {
    if ( confirm('¿Está seguro de que desea eliminar este anime?')) {
      this.mangaService.delete( id ).subscribe( res =>{
        window.location.reload()
      })
    }
  }

}
