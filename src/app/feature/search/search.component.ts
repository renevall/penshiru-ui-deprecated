import { Component, OnInit } from '@angular/core';
import { SearchService } from './search.service';
import { Subject, merge, Observable, of } from 'rxjs';
import { filter, switchMap, catchError } from 'rxjs/operators';
import { SearchResult } from '../../model/search';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  LAWS: string[] = [
    'Constitución Polītica de Nicaragua',
    'Código Procesal Civil De La República De Nicaragua',
    'Código De Familia',
    'Código Penal',
    'Código De Comercio',
    'Ley De Concertación Tributaria',
    'Ley De Equidad Fiscal',
    'Ley de Bancos',
    'Código Tributario'
  ];

  query$ = new Subject<string>();

  results$: Observable<SearchResult[]>;
  autoItems$: Observable<string[]>;

  clearResults$ = new Subject<SearchResult[]>();
  clearAuto$ = new Subject<string>();

  searchBoth$ = new Subject<string>();

  constructor(private searchService: SearchService) {}

  ngOnInit() {
    // Create Stream for AutoComplete
    const autoComplete$ = this.query$.pipe(
      filter(input =>
        /^(LEY|Ley|ley|Codigo|CODIGO|CÓDIGO|codigo|Código|código)[a-zA-Z\u00C0-\u017F\s]*(?!\/)$/.test(
          input
        )
      )
    );
    // Create Stream for Normal Search
    const search$ = this.query$.pipe(
      filter(
        input =>
          !/^(LEY|Ley|ley|Codigo|CODIGO|CÓDIGO|codigo|Código|código)[a-zA-Z\u00C0-\u017F\s]*(?!\/)$/.test(
            input
          )
      )
    );

    this.results$ = merge(search$, this.searchBoth$).pipe(
      switchMap(
        term =>
          term ? this.searchService.search(term) : of<SearchResult[]>([])
      ),
      catchError(error => of<SearchResult[]>([]))
    );

    this.autoItems$ = merge(autoComplete$, this.clearAuto$).pipe(
      switchMap(
        term =>
          term ? this.searchService.autoComplete(term) : of<string[]>([])
      ),
      catchError(error => of<string[]>([]))
    );

    search$.subscribe(term => {
      this.clearAuto$.next('');
    });

    autoComplete$.subscribe(term => {
      if (term) {
        this.searchBoth$.next(term);
      }
    });
  }

  search(query: string) {
    console.log('search on search.component');
    this.query$.next(query);
  }
}
