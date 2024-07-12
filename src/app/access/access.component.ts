import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

export interface Picture {
  name: string;
  price: number;
  img: string; // URL to the image
}

@Component({
  selector: 'app-access',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './access.component.html',
  styleUrl: './access.component.css',
})
export class AccessComponent {
  pictures: Picture[] = [
    { name: 'Watch', price: 10, img: 'assets/access/1.png' },
    { name: 'Bag', price: 15, img: 'assets/access/2.png' },
    { name: 'Airbuds', price: 20, img: 'assets/access/3.png' },
    { name: 'Headphone', price: 25, img: 'assets/access/4.png' },
    { name: 'Rado Watch', price: 30, img: 'assets/access/5.png' },
    { name: 'Swiss Watch', price: 35, img: 'assets/access/6.png' },
    { name: 'Controller', price: 40, img: 'assets/access/7.png' },
    { name: 'Laptop', price: 45, img: 'assets/access/8.png' },
    { name: 'Tab Galaxy', price: 50, img: 'assets/access/9.png' },
    { name: 'Airbuds', price: 55, img: 'assets/access/10.png' },
    { name: 'Headphone', price: 60, img: 'assets/access/11.png' },
    { name: 'Apple Airpods', price: 65, img: 'assets/access/12.png' },
  ];
}
