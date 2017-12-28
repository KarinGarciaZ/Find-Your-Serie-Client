import { AnimeService } from 'app/services/anime.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-animes',
  templateUrl: './animes.component.html',
  styleUrls: ['./animes.component.scss']
})
export class AnimesComponent implements OnInit {
  public animes: any;

  constructor( animeService: AnimeService ) {
    animeService.all()
      .subscribe( res => this.animes = res )
   }

  ngOnInit() {
  }

}
