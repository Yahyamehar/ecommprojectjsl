import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { AvailabilityPipe } from '../availability.pipe';
import { MatDialog } from '@angular/material/dialog';
import { MyDialogComponent } from '../my-dialog/my-dialog.component';

@Component({
  selector: 'app-product-details',
  standalone: true,
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css',
  imports: [CommonModule, AvailabilityPipe],
  providers: [AvailabilityPipe], // Pipe should be provided if necessary
})
export class ProductDetailsComponent implements OnInit {
  products: any;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductsService,
    private dialog: MatDialog
  ) {}

  ngOnInit() {
    const productIdParam = this.route.snapshot.paramMap.get('id');
    if (productIdParam !== null) {
      const productId = +productIdParam;
      this.products = this.productService.getProductById(productId);
    }
  }
  addToCart() {
    const dialogRef = this.dialog.open(MyDialogComponent, {
      width: '400px', // Set width as desired
      data: { product: this.products }, // Pass data to dialog if needed
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('Dialog closed with result:', result);
      // Handle dialog close actions if needed
    });
  }
}
