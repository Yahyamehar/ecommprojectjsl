import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

export interface Picture {
  name: string;
  price: number;
  img: string; // URL to the image
}
@Component({
  selector: 'app-stationery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './stationery.component.html',
  styleUrl: './stationery.component.css'
})
export class StationeryComponent {

  pictures: Picture[] = [
    { name: 'Bag', price: 10, img: 'assets/station/1.png' },
    { name: 'shopner', price: 15, img: 'assets/station/2.png' },
    { name: 'shopner', price: 20, img: 'assets/station/3.png' },
    { name: 'Book', price: 25, img: 'assets/station/4.png' },
    { name: 'Bag', price: 30, img: 'assets/station/5.png' },
    { name: 'Pencil', price: 35, img: 'assets/station/6.png' },
    { name: 'Clipper', price: 40, img: 'assets/station/7.png' },
    { name: 'Cup Pencil', price: 45, img: 'assets/station/8.png' },
    { name: 'Colorful Pen', price: 50, img: 'assets/station/9.png' },
    { name: 'stapler', price: 55, img: 'assets/station/10.png' },
    { name: 'Pen', price: 60, img: 'assets/station/11.png' },
    { name: 'Copys', price: 65, img: 'assets/station/12.png' },
  ];

}
