import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sqrt'
})
export class SqrtPipePipe implements PipeTransform {

  transform(value: number): number {
    return Math.sqrt(value);
  }

}