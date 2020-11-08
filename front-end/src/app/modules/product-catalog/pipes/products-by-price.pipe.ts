import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../../../models/product';

@Pipe({
  name: 'productsByPrice'
})
export class ProductsByPricePipe implements PipeTransform {

  transform(products: Product[], price: number): Product[] {
    if (price == null || price == 0) { return products; }

    return products.filter(p => {
      return p.price <= price;
    });
  }

}
