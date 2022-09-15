import Order from '../types/order.type';
import db from '../database';

class OrderModel {
  async create(u: Order): Promise<Order> {
    try {
      const connection = await db.connect();
      const sql = `INSERT INTO orders (status, user_id ) 
                    values ($1, $2) 
                    RETURNING status, user_id`;
      const result = await connection.query(sql, [u.status, u.user_id]);
      connection.release();
      return result.rows[0];
    } catch (error) {
      throw new Error(
        `Unable to create (${u.user_id}): ${(error as Error).message}`
      );
    }
  }

  async getAll(): Promise<Order[]> {
    try {
      const connection = await db.connect();
      const sql = 'SELECT * from orders';
      const result = await connection.query(sql);
      connection.release();
      return result.rows;
    } catch (error) {
      throw new Error(`Error at retrieving users ${(error as Error).message}`);
    }
  }

  async getById(id: string): Promise<Order> {
    try {
      const sql = `SELECT * FROM orders 
        WHERE id=($1)`;
      const connection = await db.connect();
      const result = await connection.query(sql, [id]);
      connection.release();
      return result.rows[0];
    } catch (error) {
      throw new Error(
        `Could not find order ${id}, ${(error as Error).message}`
      );
    }
  }

  async updateById(u: Order): Promise<Order> {
    try {
      const connection = await db.connect();
      const sql = `UPDATE orders 
                    SET status=$1 
                    WHERE id=$2
                    RETURNING id, status`;
      const result = await connection.query(sql, [u.status, u.id]);
      connection.release();
      return result.rows[0];
    } catch (error) {
      throw new Error(
        `Could not update order: ${u.status}, ${(error as Error).message}`
      );
    }
  }

  async delete(id: string): Promise<Order> {
    try {
      const connection = await db.connect();
      const sql = `DELETE FROM orders 
                    WHERE id=($1) 
                    RETURNING id, name`;
      const result = await connection.query(sql, [id]);
      connection.release();
      return result.rows[0];
    } catch (error) {
      throw new Error(
        `Could not delete order ${id}, ${(error as Error).message}`
      );
    }
  }
}

export default OrderModel;
