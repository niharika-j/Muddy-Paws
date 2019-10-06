import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  query: string = '';
  constructor() { }

  setQuery(query): void {
    this.query = query;
  }

  getQuery(): string {
    return this.query;
  }

}
