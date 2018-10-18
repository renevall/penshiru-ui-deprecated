import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';
import {
  debounceTime,
  distinctUntilChanged,
  switchMap,
  map,
  tap
} from 'rxjs/operators';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss']
})
export class SearchBoxComponent implements OnInit {
  @Output()
  searchChange = new EventEmitter<string>();
  private searchText$ = new Subject<string>();

  constructor() {}

  search(query: string) {
    this.searchText$.next(query);
  }

  ngOnInit() {
    this.searchText$
      .pipe(
        debounceTime(500),
        distinctUntilChanged()
      )
      .subscribe(result => this.searchChange.emit(result));
  }
}
