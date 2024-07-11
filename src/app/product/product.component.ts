import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent implements OnInit {
  products: any[] = [];

  constructor(private service: ProductsService, private router: Router) {}

  ngOnInit(): void {
    this.products = this.service.getProducts();
  }
  navigateToProductDetail(productId: number) {
    this.router.navigate(['/product', productId]);
  }

}
