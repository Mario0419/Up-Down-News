import { Pipe, PipeTransform } from '@angular/core';


@Pipe({name: 'prettyOpts'})
export class PrettyOpts implements PipeTransform {
  transform(value: string): string {
    let newValue = value.split(/\/|,/);
    newValue = newValue[0].split(/-|=/);
    return newValue.map(function(word) {
        return (word.charAt(0).toUpperCase() + word.slice(1));
      }).join(" ");

  }

}
