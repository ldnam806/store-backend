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

describe('Test Product Model Logic', () => {
  it('Get all method should return All available product in DB', async () => {
    const products = await productModel.getAll();
    expect(products.length).toBe(0);
  });
});
