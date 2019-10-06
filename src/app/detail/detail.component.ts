import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PRODUCTS } from '../shared/product-list';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  product: any;
  quantity: number = 1;
  size: string = 'small'; //Size can be small, medium or large

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    //Get product ID from URL and fetch the relevant product object using it
    let id = this.route.snapshot.params.id;
    for(let i=0;i<PRODUCTS.length;i++){
      if(PRODUCTS[i].id==id){
        this.product = PRODUCTS[i];
        break;
      }
    }
  }

  getFinalPrice(): number {
    //Multiply product price with quantity
    return parseInt(this.product.price) * this.quantity;
  }

  showAlert(): void {
    //Customized message for 'Add to cart'
    alert(this.quantity + ' ' + this.size + ' ' + this.product.name+ ' added to cart successfully!');
  }

}
