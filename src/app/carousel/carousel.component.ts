import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css',
})
export class CarouselComponent implements OnInit {
  photos = ['assets/4.png', 'assets/3.png', 'assets/2.png', 'assets/1.png'];

  constructor() {}

  ngOnInit() {}
}
