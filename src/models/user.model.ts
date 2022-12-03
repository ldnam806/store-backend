import User from '../types/user.type';
import db from '../database';
import bcrypt from 'bcrypt';
class UserModel {
  async Create(data: User): Promise<User> {
    try {
      const connection = await db.connect();
      const query = `INSERT INTO "users" ("email", "firstName", "lastName" , password) 
                    values ($1, $2, $3, $4) 
                    RETURNING id, email, "firstName", "lastName"`;
      const salt = bcrypt.genSaltSync(5);
      const hashPass = bcrypt.hashSync(data.password, parseInt(salt));
      const result = await connection.query(query, [
        data.email,
        data.firstName,
        data.lastName,
        hashPass
      ]);
      connection.release();
      return result.rows[0];
    } catch (error) {
      throw new Error((error as Error).message);
    }
  }

  async Index(): Promise<User[]> {
    try {
      const connection = await db.connect();
      const query = 'SELECT * from "users"';
      const result = await connection.query(query);
      connection.release();
      return result.rows;
    } catch (error) {
      throw new Error((error as Error).message);
    }
  }

  async Show(id: string): Promise<User> {
    try {
      const query = `SELECT * FROM "users" 
        WHERE id=($1)`;
      const connection = await db.connect();
      const result = await connection.query(query, [id]);
      connection.release();
      return result.rows[0];
    } catch (error) {
      throw new Error((error as Error).message);
    }
  }

  async Auth(email: string, password: string): Promise<User | null> {
    try {
      const connection = await db.connect();
      const result = await connection.query(
        'SELECT "password" FROM "users" WHERE email=$1',
        [email]
      );
      if (result.rows.length) {
        const correct = bcrypt.compareSync(password, result.rows[0].password)
        if (correct) {
          const userInfo = await connection.query(
            'SELECT id, email, "firstName", "lastName" FROM "users" WHERE email=($1)',
            [email]
          );
          return userInfo.rows[0];
        }
      }
      connection.release();
      return null;
    } catch (error) {
      throw new Error((error as Error).message);
    }
  }
}

export default UserModel;
