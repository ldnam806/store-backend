import Order from '../types/order.type';
import db from '../database';

class OrderModel {
  async Create(data: Order): Promise<Order> {
    try {
      const connection = await db.connect();
      const query = `INSERT INTO orders (status, user_id ) 
                    values ($1, $2) 
                    RETURNING id, status, user_id`;
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


}

export default OrderModel;
