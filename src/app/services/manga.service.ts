import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { RequestService } from './request.service';

@Injectable()
export class MangaService extends RequestService {
  
  constructor( protected http: Http ) {
    super( http, 'Mangas' )
  }
}