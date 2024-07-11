export interface Product {
  id: number;
  name: string;
  price: number;
  discountPrice?: number; // Optional property for discount price
  image: string;
  description: string;
  sizes: string[]; // Array of available sizes
  reviews: string[]; // Array of review ratings or comments
  category: string;
  brand: string;
  availability: 'In Stock' | 'Out of Stock'; // Availability status
  rating: number; // Average rating
  color: string; // Product color
  // Add more properties as needed for your specific application
}
