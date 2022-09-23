import Product from '../types/product.type';
import db from '../database';

class ProductModel {
  async create(u: Product): Promise<Product> {
    try {
      const connection = await db.connect();
      const sql = `INSERT INTO product (name, price) 
                    values ($1, $2) 
                    RETURNING name, price`;
      const result = await connection.query(sql, [u.name, u.price]);
      connection.release();
      return result.rows[0];
    } catch (error) {
      throw new Error(
        `Unable to create (${u.name}): ${(error as Error).message}`
      );
    }
  }

  async getAll(): Promise<Product[]> {
    try {
      const connection = await db.connect();
      const sql = 'SELECT * FROM product';
      const result = await connection.query(sql);
      connection.release();
      return result.rows;
    } catch (error) {
      throw new Error(`Error at retrieving ${(error as Error).message}`);
    }
  }
  // get specific student
  async getById(id: string): Promise<Product> {
    try {
      const sql = `SELECT * FROM product 
        WHERE id=($1)`;
      const connection = await db.connect();
      const result = await connection.query(sql, [id]);
      connection.release();
      return result.rows[0];
    } catch (error) {
      throw new Error(
        `Could not find product ${id}, ${(error as Error).message}`
      );
    }
  }
  // update student
  async updateById(u: Product): Promise<Product> {
    try {
      const connection = await db.connect();
      const sql = `UPDATE product 
                    SET name=$1, price=$2, 
                    WHERE id=$3
                    RETURNING id, name, price`;
      const result = await connection.query(sql, [u.name, u.price, u.id]);
      connection.release();
      return result.rows[0];
    } catch (error) {
      throw new Error(
        `Could not update product: ${u.name}, ${(error as Error).message}`
      );
    }
  }
  // delete student
  async delete(id: string): Promise<Product> {
    try {
      const connection = await db.connect();
      const sql = `DELETE FROM product 
                    WHERE id=($1) 
                    RETURNING id, name`;
      const result = await connection.query(sql, [id]);
      connection.release();
      return result.rows[0];
    } catch (error) {
      throw new Error(
        `Could not delete user ${id}, ${(error as Error).message}`
      );
    }
  }
}

export default ProductModel;
