import User from '../types/user.type';
import db from '../database';

class UserModel {
  async create(u: User): Promise<User> {
    try {
      const connection = await db.connect();
      const sql = `INSERT INTO user (firstName, lastName , password) 
                    values ($1, $2, $3) 
                    RETURNING firstName, lastName, password`;
      const result = await connection.query(sql, [
        u.firstName,
        u.lastName,
        u.password
      ]);
      connection.release();
      return result.rows[0];
    } catch (error) {
      throw new Error(
        `Unable to create (${u.firstName} - ${u.lastName}): ${
          (error as Error).message
        }`
      );
    }
  }

  async getAll(): Promise<User[]> {
    try {
      const connection = await db.connect();
      const sql = 'SELECT * from user';
      const result = await connection.query(sql);
      connection.release();
      return result.rows;
    } catch (error) {
      throw new Error(`Error at retrieving users ${(error as Error).message}`);
    }
  }

  async getById(id: string): Promise<User> {
    try {
      const sql = `SELECT * FROM user 
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

  async updateById(u: User): Promise<User> {
    try {
      const connection = await db.connect();
      const sql = `UPDATE user 
                    SET firstName=$1, lastName=$2, password=$3, 
                    WHERE id=$4
                    RETURNING id, firstName, lastName`;

      const result = await connection.query(sql, [
        u.firstName,
        u.lastName,
        u.password,
        u.id
      ]);
      connection.release();
      return result.rows[0];
    } catch (error) {
      throw new Error(
        `Could not update product: ${u.firstName} - ${u.lastName}, ${
          (error as Error).message
        }`
      );
    }
  }

  async delete(id: string): Promise<User> {
    try {
      const connection = await db.connect();
      const sql = `DELETE FROM user 
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

export default UserModel;
