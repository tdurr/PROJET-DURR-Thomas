import { Pipe, PipeTransform } from '@angular/core';
import { Product } from './../modeles/product';

@Pipe({
  name: 'productsByCategory'
})
export class ProductsByCategoryPipe implements PipeTransform {

  transform(products: Product[], category: string): Product[] {
    if (category.length == 0) { return products; }
    
    return products.filter(p => {
      return p.category.toLowerCase().includes(category.toLowerCase());
    });
  }

}
