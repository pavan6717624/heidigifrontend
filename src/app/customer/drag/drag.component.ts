import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
export class Product {
  id?: string;
  code?: string;
  name?: string;
  description?: string;
  price?: number;
  quantity?: number;
  inventoryStatus?: string;
  category?: string;
  image?: string;
  rating?: number;
}
@Component({
  selector: 'app-drag',
  templateUrl: './drag.component.html',
  styleUrls: ['./drag.component.css']
})
export class DragComponent implements OnInit {

  availableProducts: Product[]=[];

  selectedProducts: Product[]=[];

  draggedProduct: Product = new Product();

  constructor(private http:HttpClient) {}

  getProductsSmall() {
    return this.http
        .get<any>('assets/products-small.json')
        .toPromise()
        .then((res:any) => <Product[]>res.data)
        .then((data:any) => {
            return data;
        });
}

  ngOnInit() {
      this.selectedProducts = [];
      this.getProductsSmall().then((products:any) => (this.availableProducts = products));
  }

  dragStart(product: Product) {
      this.draggedProduct = product;
  }

  drop() {
      if (this.draggedProduct) {
          let draggedProductIndex = this.findIndex(this.draggedProduct);
          this.selectedProducts = [...this.selectedProducts, this.draggedProduct];
          this.availableProducts = this.availableProducts.filter((val, i) => i != draggedProductIndex);
          this.draggedProduct = new Product();
      }
  }

  dragEnd() {
      this.draggedProduct = new Product();
  }

  findIndex(product: Product) {
      let index = -1;
      for (let i = 0; i < this.availableProducts.length; i++) {
          if (product.id === this.availableProducts[i].id) {
              index = i;
              break;
          }
      }
      return index;
  }
}
