import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-seller',
  templateUrl: './product-seller.component.html',
  styleUrls: ['./product-seller.component.scss']
})
export class ProductSellerComponent implements OnInit {
  public sellerId: number;

  constructor(private activedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.sellerId = this.activedRoute.snapshot.params['id'];
  }

}
