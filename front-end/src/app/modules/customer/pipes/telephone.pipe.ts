import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'telephone'
})
export class TelephonePipe implements PipeTransform {

  transform(numeroTel : string) : string
    {
        if (numeroTel == null) {
            return null;
        }

        let telephone : string = numeroTel;
        if (numeroTel.charAt(0) === '+') {
            telephone = telephone.substr(4, telephone.length - 3);
        }

        telephone = telephone.replace(/\s/g, '');

        let spacedTelephone : string;
        spacedTelephone = telephone.match(/.{2}/g).join(' ');

        let formatTelephone : string;
        formatTelephone = '+33 '.concat(spacedTelephone);

        return formatTelephone;
    }
  

}
