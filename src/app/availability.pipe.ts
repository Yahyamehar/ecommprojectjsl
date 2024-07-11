import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'availability',
  standalone: true
})
export class AvailabilityPipe implements PipeTransform {

  transform(value: string): string {
    return value === 'In Stock' ? 'In Stock' : 'Out of Stock';
  }

}
