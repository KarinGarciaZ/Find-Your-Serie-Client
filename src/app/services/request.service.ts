import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Response } from '@angular/http/src/static_response';
import { UrlConfigurationService } from 'app/services/url.configuration.service';

@Injectable()
export class RequestService {
  protected headers: Headers

  constructor( protected http: Http, protected endPoint: string ) {
    this.endPoint = `${UrlConfigurationService.BASE_URL}/${endPoint}`
    this.headers = new Headers({ 'Content-Type': 'application/json' });
  }

  public all(): Observable<any[]> { 
    return this.http.get(`${this.endPoint}`)
      .map(res => res.json() || { })
      .catch(err => JSON.stringify(err));
  }

  public create( obj ): Observable<any> {
    return this.http.post(`${this.endPoint}`, obj, { headers: this.headers })
      .map( res => res.json() || {})
      .catch( this.handleError );
  }

  public findById( id ): Observable<any> {
    return this.http.get(`${this.endPoint}/${id}`)
      .map( res => res.json() || {} )
      .catch( this.handleError );
  }

  public update( obj ): Observable<any> {
    return this.http.put(`${this.endPoint}/${obj.id}`, obj, { headers: this.headers })
      .map( res => res.json() || {} )
      .catch( this.handleError );
  }

  public delete( id ): Observable<any> {
    return this.http.delete(`${this.endPoint}/${id}`,{ headers: this.headers })
      .map( res => res.json() || {} )
      .catch( this.handleError );
  }

  public getPage( item ): Observable<any> {
    return this.http.get(`${this.endPoint}?filter[include]=page&filter[include]=${item}`)
      .map( res => res.json() || {} )
      .catch( this.handleError );
  }

  private handleError(error: Response) {
    return Observable.throw(error.json()|| 'Server error')
  }

}
