import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, tap, catchError, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RMCharsService {

  private readonly URL = 'https://rickandmortyapi.com/api/character/?page=';
  private readonly URLDetail = 'https://rickandmortyapi.com/api/character/';

  constructor(private httpClient: HttpClient) { }

  getRMCharactersByPage$(page: number): Observable<any>{
    console.log('RM Chars -->', `${this.URL}${page}`);
    return this.httpClient.get(`${this.URL}${page}`)
    .pipe(
      map(
        ({results}: any) => {
          return results
        }
      ),
      tap(data => console.log('--------->', data)),
      catchError( (err) => {
        const { status, statusText } = err;
        console.log('Algo paso --->', [status, statusText]);
        return of([])
      })
    )
  }

  getSelectedCharDetail$(id: string | null): Observable<any>{
    return this.httpClient.get(`${this.URLDetail}${id}`)
    .pipe(
      map(
        (results: any) => {
          return results;
        }
      ),
      tap(data => console.log('Char Detail Data --->', data))
    )
  }


}
