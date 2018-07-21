import { Injectable } from '@angular/core';
import {Links} from '../models/links';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
declare var toastr: any;

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class LinkService {

  private linksUrl = '/api/links';

  constructor(
    private http: HttpClient
  ) { }

  getLinks(): Observable<Links[]>{
    return this.http.get<Links[]>(this.linksUrl)
      .pipe(
        tap( ),
        catchError(this.handleError('getLinks', []))
      );
  }

  getLink(id: number): Observable<Links>{
    const url = `${this.linksUrl}/${id}`;
    return this.http.get<Links>(url).pipe(
      tap(),
      catchError(this.handleError<Links>(`getLinks id=${id}`))
    );
  }

  successFetch(link:Links){
    if(link){
      this.showMessage(`Fetched Link: ${link.displayedName}`, 'success');
    }
  }

  addLink(link: Links): Observable<Links>{
    return this.http.post<Links>(this.linksUrl, link, httpOptions).pipe(
      tap((link: Links) => this.showMessage(`added Link ${link.displayedName}`, 'success')),
      catchError(this.handleError<Links>('addLink'))
    );
  }

  updateLink(link: Links): Observable<any>{
    return this.http.put(this.linksUrl, link, httpOptions).pipe(
      tap(_ => this.showMessage(`updated link ${link.displayedName}`, 'success')),
      catchError(this.handleError<any>('updateLink'))
    );
  }

  deleteLink(link: Links): Observable<Links>{
    const url = `${this.linksUrl}/${link.id}`;

    return this.http.delete<Links>(url, httpOptions).pipe(
      tap(_ => this.showMessage(`deleted link ${link.displayedName}`, 'warning')),
      catchError(this.handleError<Links>('deleteLink'))
    );
  }

  private showMessage(message:string, type:string){

    //toastr.options.timeOut = 0; // How long the toast will display without user interaction
    //toastr.options.extendedTimeOut = 0; // How long the toast will display after a user hovers over it
    toastr.options.positionClass='toast-top-center'
    toastr.clear();

    switch(type){
      case 'success':
          toastr.success(message, 'Success');
          break;
      case 'warning':
          toastr.warning(message, 'Warning');
          break;
      case 'error':
          toastr.error(message, 'Error');
          break;
          
    }
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      this.showMessage(error, 'error');
      console.log(error);
      //this.log('${operation} failed: ${error.message}');
      
      return of(result as T);
    };
  }
}
