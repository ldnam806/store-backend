import Product from '../types/product.type';
import db from '../database';

class ProductModel {

  async Create(data: Product): Promise<Product> {
    try {
      const connection = await db.connect();
      const query = `INSERT INTO product (name, price) 
                    values ($1, $2) 
                    RETURNING id, name, price`;
      const result = await connection.query(query, [data.name, data.price]);
      connection.release();
      return result.rows[0];
    } catch (error) {
      throw new Error((error as Error).message);
    }
  }

  async Show(): Promise<Product[]> {
    try {
      const connection = await db.connect();
      const query = 'SELECT * FROM product';
      const result = await connection.query(query);
      connection.release();
      return result.rows;
    } catch (error) {
      throw new Error((error as Error).message);
    }
  }

  async Index(id: string): Promise<Product> {
    try {
      const query = `SELECT * FROM product 
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

export default ProductModel;
