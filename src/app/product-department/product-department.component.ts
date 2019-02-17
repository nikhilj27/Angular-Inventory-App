import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../product.model';

@Component({
  selector: 'product-department',
  template: `
    <div class="product-department">
    <span *ngFor="let name of product.department; let i=index">
    <a href="#">{{name}}</a>
    <span>{{i < (product.department.length-1) ? '>' : ''}}</span>
    </span>
    </div>
  `,
  styleUrls: ['./product-department.component.scss']
})
export class ProductDepartmentComponent implements OnInit {

  @Input() product: Product;
  constructor() { }

  ngOnInit() {
  }

}
