import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

export interface Picture {
  name: string;
  price: number;
  img: string; // URL to the image
}

@Component({
  selector: 'app-sale',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sale.component.html',
  styleUrl: './sale.component.css'
})
export class SaleComponent {

  pictures: Picture[] = [
    { name: 'Watch', price: 10, img: 'assets/access/1.png' },
    { name: 'shopner', price: 15, img: 'assets/station/2.png' },
    { name: 'Airbuds', price: 20, img: 'assets/access/3.png' },
    { name: 'Book', price: 25, img: 'assets/station/4.png' },
    { name: 'Rado Watch', price: 30, img: 'assets/access/5.png' },
    { name: 'Pencil', price: 35, img: 'assets/station/6.png' },
    { name: 'Controller', price: 40, img: 'assets/access/7.png' },
    { name: 'Cup Pencil', price: 45, img: 'assets/station/8.png' },
    { name: 'Tab Galaxy', price: 50, img: 'assets/access/9.png' },
    { name: 'stapler', price: 55, img: 'assets/station/10.png' },
    { name: 'Headphone', price: 60, img: 'assets/access/11.png' },
    { name: 'Copys', price: 65, img: 'assets/station/12.png' },
  ];

}
