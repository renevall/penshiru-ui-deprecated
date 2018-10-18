import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { SearchResult } from '../../model/search';
import { HttpClient } from '@angular/common/http';
import { Law } from '../../model/law';
import { SearchModule } from './search.module';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private endpoint = 'http://localhost:8585';
  private searchAPI = this.endpoint + '/law/search';
  private autoCompleteAPI = this.endpoint + '/api/law/autocomplete';
  private topLawsAPI = this.endpoint + '/api/law/country/toplaws';

  constructor(private http: HttpClient) {}

  search(query: string): Observable<SearchResult[]> {
    console.log('search reached');
    return of<SearchResult[]>([{ id: 'Hola' }]);
    return this.http.get<SearchResult[]>(this.searchAPI + '?query=' + query);
  }

  autoComplete(query: string): Observable<string[]> {
    console.log('autocomplete reached');
    return of(['rene', 'Pedro', 'augusto', 'Arturo']);
    // return this.http.get<string[]>(this.autoCompleteAPI + '?query=' + query);
  }

  topLaws(country: string): Observable<Law[]> {
    return this.http.get<Law[]>(this.topLawsAPI);
  }
}
