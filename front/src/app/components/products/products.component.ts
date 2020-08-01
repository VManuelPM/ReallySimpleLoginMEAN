import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products = [];

  constructor(private productService: ProductsService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(){
    this.productService.getProduct().subscribe(
      res => {
        this.products = res;
      },
      err =>{
        console.log(err);
      }
    )
  }

  getPrivateProducts(){
    this.productService.getPrivateProduct().subscribe(
      res => {
        this.products = res;
      },
      err =>{
        console.log(err);
      }
    )
  }

}
