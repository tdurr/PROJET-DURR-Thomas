import { Pipe, PipeTransform } from '@angular/core';
import { Product } from './../modeles/product';

@Pipe({
  name: 'productsByName'
})
export class ProductsByNamePipe implements PipeTransform {

  transform(products: Product[], name: string): Product[] {
    
    if (name.length == 0) { return products; }

    return products.filter(p => {
      return p.name.toLowerCase().includes(name.toLowerCase());
    });
  }
}
