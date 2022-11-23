import ProductModel from '../product.model';
describe('Test Product Model Methods', () => {
  const productModel = new ProductModel();
  it('Get all method exist', () => {
    expect(productModel.Index).toBeDefined();
  });

  it('Get by ID method exist', () => {
    expect(productModel.Show).toBeDefined();
  });

  it('Create method exist', () => {
    expect(productModel.Create).toBeDefined();
  });

});
