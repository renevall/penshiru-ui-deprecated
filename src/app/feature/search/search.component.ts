import { Component, OnInit } from '@angular/core';

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

  constructor() {}

  ngOnInit() {}
}
