import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cardNumber'
})
export class CardNumberPipe implements PipeTransform {

  transform(number : string) : string
    {
        if (number == null) {
            return null;
        }

        let spacedNumber : string;
        spacedNumber = number.match(/.{4}/g).join(' ');

        return spacedNumber;
    }

}
