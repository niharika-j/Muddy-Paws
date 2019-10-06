import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SearchService } from '../product-search/search.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router, private searchService: SearchService) { }

  ngOnInit() {
  }

  showCatProducts(): void {
    this.searchService.setQuery('cat');
    this.router.navigate(['/search']);
  }

}
