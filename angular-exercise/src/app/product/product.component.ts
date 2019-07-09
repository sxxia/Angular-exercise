import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { Product } from '../entities/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit, OnDestroy {
  public productId: number;
  public productName: string;
  public paramsSubscription: Subscription;

  constructor(private activedRoute: ActivatedRoute) { }

  ngOnInit() {
    // this.productId = this.activedRoute.snapshot.queryParams['id'];
    // this.productId = this.activedRoute.snapshot.params['id'];
    this.paramsSubscription = this.activedRoute.params.subscribe((params: Params) => {
      this.productId = params['id'];
    });

    this.activedRoute.data.subscribe((data: {product: Product}) => {
      this.productId = data.product.id;
      this.productName = data.product.name;
    });
  }

  ngOnDestroy(): void {
    this.paramsSubscription.unsubscribe();
  }

}
