import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'trimOutletName',
})
export class TrimOutletNamePipe implements PipeTransform {
  /** 如果要在 pipe 內丟另外的參數的話，寫法如下 */
  // transform(title: string, outletName: string): unknown {
  //   return title.replace(` - ${outletName}`, '');
  // }

  transform(title: string): string {
    return title.split('-')[0];
  }
}
