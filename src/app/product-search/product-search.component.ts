import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SearchService } from './search.service';
import { PRODUCTS } from '../shared/product-list';

@Component({
  selector: 'app-product-search',
  templateUrl: './product-search.component.html',
  styleUrls: ['./product-search.component.scss']
})
export class ProductSearchComponent implements OnInit {

  productList = PRODUCTS;
  tempProductList = PRODUCTS; //Used to reset after filter/search
  query: string = ''; //Search query input
  blue: boolean = false;
  white: boolean = false;
  red: boolean = false;
  minPrice: number;
  maxPrice: number;

  constructor(private router: Router, private searchService: SearchService) { }

  ngOnInit() {
    let query = this.searchService.getQuery();
    if(query){
      this.query = query;
      this.filterProducts();
      this.searchService.setQuery('');
    }
  }

  filterProducts(): void {
    /*
    Filters product list based on search query, color and price selected by user
    */


    //Search for query
    let filteredByQuery = this.tempProductList.filter(product => {
      return product.name.toLowerCase().indexOf(this.query.toLowerCase().trim())>-1;
    });


    //Filters results between the price range given by user
    let minPrice = this.minPrice?this.minPrice:0; //If no input given, minPrice=0
    let maxPrice = this.maxPrice?this.maxPrice:9999999; //If no input given, maxPrice is a very high number greater than price of any of the products
    let filteredByPrice = [];
    for(let i=0;i<filteredByQuery.length;i++){
      if(filteredByQuery[i].price<minPrice||filteredByQuery[i].price>maxPrice){
        continue;
      }
      filteredByPrice.push(filteredByQuery[i]);
    }

    //Filters results based on color
    let filteredByColor = [];
    if(this.blue||this.white||this.red){
      for(let i=0;i<filteredByPrice.length;i++){
        if((this.blue&&filteredByPrice[i]['colors'].indexOf('blue')>-1)||
        (this.white&&filteredByPrice[i]['colors'].indexOf('white')>-1)||
        (this.red&&filteredByPrice[i]['colors'].indexOf('red')>-1)){
          filteredByColor.push(filteredByPrice[i]);
        }
      }
    }
    else{
      filteredByColor = filteredByPrice;
    }

    //Sets the new list to be displayed
    this.productList = filteredByColor;
  }

  showProductDetails(product): void {
    //Navigate to details page
    this.router.navigate(['/detail', product.id])
  }

}
