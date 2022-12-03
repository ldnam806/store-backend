import OrderModel, {AddProductToOrder} from '../order.model';
import Order from '../../types/order.type'
import UserModel from '../user.model';
import User from '../../types/user.type'
import ProductModel from '../product.model';
import Product from '../../types/product.type';

describe('Order model methods', () => {  
  const orderModel = new OrderModel();
  const userModel = new UserModel();
  const productModel = new ProductModel();
  let initUser = {} as User;
  let orderContext = {} as Order;
  let initProduct = {} as Product;
  const userData: User = {
    firstName: 'le',
    lastName: 'nam',
    email: 'nam@gmail.com',
    password: 'nam205806',
  };
  const productData: Product = {
    name: 'Phone X',
    price: 150.000,
  };
 
  beforeAll(async () => {
    initUser = await userModel.Create(userData);    
    initProduct = await productModel.Create(productData);
    const data: Order = {
      status: 1,
      user_id: initUser?.id as string,
    };
    orderContext = await orderModel.Create(data);
  });

  it('Get all', async () => {
    const result = await orderModel.Index();
    expect(result.length).toBeGreaterThan(0);
  });

  it('Get by Id', async () => {
    const result = await orderModel.Show(orderContext?.id as string);
    expect(result?.id).toEqual(orderContext?.id);
  });


  it('Add product to a order', async () => {
    const formData: AddProductToOrder = {
      orderId: Number(orderContext?.id) ,
      productCode: Number(initProduct?.id),
      quantity: 5
    }
    const result = await orderModel.AddProduct(formData);
    expect(result.orderid).toEqual(orderContext.id);
  });
});
