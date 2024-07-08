import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rounded',
  standalone: true
})
export class RoundedPipe implements PipeTransform {

  transform(value: number): number {
    return Math.ceil(value * 2) / 2;
  }

}
