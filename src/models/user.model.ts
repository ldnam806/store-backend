import User from '../types/user.type';
import db from '../database';
class UserModel {
  async Create(data: User): Promise<User> {
    try {
      const connection = await db.connect();
      const query = `INSERT INTO "user" (email, "firstName", "lastName" , password) 
                    values ($1, $2, $3, $4) 
                    RETURNING id, email, "firstName", "lastName"`;
      const result = await connection.query(query, [
        data.email,
        data.firstName,
        data.lastName,
        data.password
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
      const query = 'SELECT * from "user"';
      const result = await connection.query(query);
      connection.release();
      return result.rows;
    } catch (error) {
      throw new Error((error as Error).message);
    }
  }

  async Show(id: string): Promise<User> {
    try {
      const query = `SELECT * FROM "user" 
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
        'SELECT "password" FROM "user" WHERE email=$1',
        [email]
      );
      if (result.rows.length) {
        const isPasswordValid = result.rows[0].password === password;
        if (isPasswordValid) {
          const userInfo = await connection.query(
            'SELECT id, email, "firstName", "lastName" FROM "user" WHERE email=($1)',
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
