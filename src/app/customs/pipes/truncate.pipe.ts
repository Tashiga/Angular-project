import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate'
})
export class TruncatePipe implements PipeTransform {

  MAX_CHAR_TO_DISPLAY: number = 240;
  ELLIPSIS: string = '...';

  transform(value: string): string{
    if (!value) return '';
    if (value.length <= this.MAX_CHAR_TO_DISPLAY) return value;
    return value.substring(0, this.MAX_CHAR_TO_DISPLAY) + this.ELLIPSIS;
  }

}
