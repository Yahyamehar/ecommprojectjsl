import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CarouselComponent } from "../carousel/carousel.component";
import { ProductComponent } from "../product/product.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [CommonModule, CarouselComponent, ProductComponent]
})
export class HomeComponent {

}
