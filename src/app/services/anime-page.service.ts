import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { RequestService } from 'app/services/request.service';

@Injectable()
export class AnimePageService extends RequestService {
  
  constructor( protected http: Http ) {
    super( http, 'Anime_Pages')
  }

  public getToDelete( id ): Observable<any> {
    return this.http.get(`${this.endPoint}?filter[where][animeId]=${id}`,{ headers: this.headers })
      .map( res => res.json() || {} )
  }

}
