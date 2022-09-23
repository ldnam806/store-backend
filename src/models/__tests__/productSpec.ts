import ProductModel from '../product.model';
const productModel = new ProductModel();

describe('Test Product Model Methods', () => {
  it('Get all method exist', () => {
    expect(productModel.getAll).toBeDefined();
  });

  it('Get by ID method exist', () => {
    expect(productModel.getById).toBeDefined();
  });

  it('Create method exist', () => {
    expect(productModel.create).toBeDefined();
  });

  it('Update by ID method exist', () => {
    expect(productModel.updateById).toBeDefined();
  });

  it('Delete method exist', () => {
    expect(productModel.delete).toBeDefined();
  });
});
