import { ProductsByNamePipe } from './products-by-name.pipe';

describe('ProductsByNamePipe', () => {
  it('create an instance', () => {
    const pipe = new ProductsByNamePipe();
    expect(pipe).toBeTruthy();
  });
});
