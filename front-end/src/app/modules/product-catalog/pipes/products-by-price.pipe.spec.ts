import { ProductsByPricePipe } from './products-by-price.pipe';

describe('ProductsByPricePipe', () => {
  it('create an instance', () => {
    const pipe = new ProductsByPricePipe();
    expect(pipe).toBeTruthy();
  });
});
