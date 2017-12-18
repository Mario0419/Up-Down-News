import { Pipe, PipeTransform } from '@angular/core';


@Pipe({name: 'replaceGoodNews'})
export class ReplaceGoodNews implements PipeTransform {
  transform(value: string): string {
    let newValue = value.replace('appeared first on <a rel="nofollow" href="https://www.goodnewsnetwork.org">Good News Network</a>.', '');
    return newValue;
  }
}
