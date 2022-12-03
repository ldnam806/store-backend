import Order from '../types/order.type';
import db from '../database';


export type AddProductToOrder = {
  id?: string;
  orderId: number;
  orderid?: string;
  productCode: number;
  quantity: number;
};

class OrderModel {
  async Create(data: Order): Promise<Order> {
    try {
      const connection = await db.connect();
      const query = `INSERT INTO orders (status, "userId" ) 
                    values ($1, $2) 
                    RETURNING id, status, "userId"`;
      const result = await connection.query(query, [data.status, data.user_id]);
      connection.release();
      return result.rows[0];
    } catch (error) {
      throw new Error((error as Error).message);
    }
  }

  async Index(): Promise<Order[]> {
    try {
      const connection = await db.connect();
      const query = 'SELECT * from orders';
      const result = await connection.query(query);
      connection.release();
      return result.rows;
    } catch (error) {
      throw new Error((error as Error).message);
    }
  }

  async Show(id: string): Promise<Order> {
    try {
      const query = `SELECT * FROM orders 
        WHERE id=($1)`;
      const connection = await db.connect();
      const result = await connection.query(query, [id]);
      connection.release();
      return result.rows[0];
    } catch (error) {
      throw new Error((error as Error).message);
    }
  }

  async AddProduct(data: AddProductToOrder): Promise<AddProductToOrder> {
    try {
      const conn = await db.connect();
      const query = `INSERT INTO product_quantity (orderId, productCode, quantity)
                  values ($1, $2, $3)
                  RETURNING id, orderId, productCode, quantity`;
      const result = await conn.query(query, [
        data.orderId,
        data.productCode,
        data.quantity,
      ]);
      conn.release();
      return result.rows[0];
    } catch (error) {
      throw new Error((error as Error).message);
    }
  }


}

export default OrderModel;
