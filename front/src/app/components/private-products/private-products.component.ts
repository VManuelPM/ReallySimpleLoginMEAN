import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-private-products',
  templateUrl: './private-products.component.html',
  styleUrls: ['./private-products.component.scss']
})
export class PrivateProductsComponent implements OnInit {

  products = [];

  constructor(private productService: ProductsService) { }

  ngOnInit(): void {
    this.getPrivateProducts();
  }
  
  getPrivateProducts(){
    this.productService.getPrivateProduct().subscribe(
      res => {
        console.log(res);
        this.products = res;
      },
      err =>{
        console.log(err);
      }
    )
  }
}
