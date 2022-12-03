import ProductModel from '../product.model';
import Product from '../../types/product.type';
const productModel = new ProductModel();
describe('Product model methods', () => {
  let initProduct = {} as Product;
  beforeAll(async () => {
    const productData: Product = {
      name: 'Phone X',
      price: 150.000,
    };
    initProduct = await productModel.Create(productData);
  });

  it('Create a product', async () => {
    const data = {
      name: 'Phone X5',
      price:100000
    } as Product
   const result = await productModel.Create(data);
    expect(result).toEqual({
      id:result.id,
      ...data
    });
  });

  it('Get all', async () => {
    const result = await productModel.Index();
    expect(result?.length).toBeGreaterThan(0);
  });


  it('Get by Id', async () => {
    const result = await productModel.Show(initProduct.id as string);
    expect(result).toEqual(initProduct);
  });

 
});
