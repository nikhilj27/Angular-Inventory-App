import { Component } from '@angular/core';
import { Product } from './product.model';

@Component({
  selector: 'inventory-app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  products: Product[];
  constructor() {
    this.products = [
      new Product(
        'MyShoes',
        'Black Running Shoes',
        '/assets/images/products/black-shoes.jpg',
        ['Men, shoes', 'Running Shoes'],
        109.99
      ),

      new Product(
        'NEATOJACKET',
        'Blue Jacket',
        '/assets/images/products/blue-jacket.jpg',
        ['Women', 'Apparel', 'Jackets & vests'],
        238.99
      ),

      new Product(
        'NICEHAT',
        'A Nice Black Hat',
        '/assets/images/products/black-hat.jpg',
        ['Men', 'Accessories', 'Hats'],
        29.99
      )
    ];
  }


  productWasSelected(product: Product) {
    console.log(`Product Clicked : ${product}`);
  }

}

