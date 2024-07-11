import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  products = [
    {
      id: 1,
      name: 'Socks',
      discountPrice: 10,
      price: 49.99,
      image: 'assets/1.png',
      description: 'Comfortable and stylish socks.',
      sizes: ['Small', 'Medium', 'Large'],
      reviews: ['★★★★☆', '★★★☆☆', '★★★★★'],
      category: 'Clothing',
      brand: 'SockBrand',
      availability: 'In Stock',
      rating: 4.5,
      color: 'Black',
    },
    {
      id: 2,
      name: 'Bag',
      discountPrice: 10,
      price: 29.99,
      image: 'assets/2.png',
      description: 'Durable and spacious bag.',
      sizes: ['Small', 'Medium', 'Large'],
      reviews: ['★★★☆☆', '★★★★☆', '★★★★★'],
      category: 'Accessories',
      brand: 'BagBrand',
      availability: 'In Stock',
      rating: 4.0,
      color: 'Brown',
    },
    {
      id: 3,
      name: 'Cover',
      discountPrice: 10,
      price: 39.99,
      image: 'assets/3.png',
      description: 'Protective and stylish cover.',
      sizes: ['Small', 'Medium', 'Large'],
      reviews: ['★★★★☆', '★★☆☆☆', '★★★★★'],
      category: 'Home',
      brand: 'CoverBrand',
      availability: 'Out of Stock',
      rating: 3.5,
      color: 'White',
    },
    {
      id: 4,
      name: 'Bedding',
      discountPrice: 10,
      price: 19.99,
      image: 'assets/4.png',
      description: 'Soft and comfortable bedding.',
      sizes: ['Single', 'Double', 'King'],
      reviews: ['★★★★★', '★★★★☆', '★★★☆☆'],
      category: 'Home',
      brand: 'BeddingBrand',
      availability: 'In Stock',
      rating: 5.0,
      color: 'Blue',
    },
  ];

  constructor() {}

  getProducts() {
    return this.products;
  }

  getProductById(id: number) {
    return this.products.find((product) => product.id === id);
  }
}
