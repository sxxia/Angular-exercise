import { Component, OnInit } from '@angular/core';
import { ProductService } from '../service/product.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  public products = [];
  private productSubscription: Subscription;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productSubscription = this.productService.getProducts().subscribe((data: any) => {
      console.log(data.products);
      this.products = data.products;
    });
  }

  ngOnDestroy(): void {
    this.productSubscription.unsubscribe();
  }

}
