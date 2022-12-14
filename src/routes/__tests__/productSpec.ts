import supertest from 'supertest';
import app from '../../index';
const request = supertest(app);
// eslint-disable-next-line
let tokenText: any;

describe('Product routes method', () => {
  beforeAll(async () => {
    tokenText = await request.post('/api/user/login').send({
      email: 'nam1@gmail.com',
      password: 'nam205806'
    });
  });
  it('Get all', async () => {
    const token = JSON.parse(tokenText.text);
    const res = await request
      .get('/api/product/')
      .set('Authorization', `Bearer ${token.data.token}`);
    expect(res.statusCode).toBe(200);
  });
  it('Create', async () => {
    const token = JSON.parse(tokenText.text);
    const res = await request
      .post('/api/product')
      .set('Authorization', `Bearer ${token.data.token}`)
      .send({
        name: 'iphone X',
        price: 5000.0
      });
    expect(res.statusCode).toBe(200);
  });
});
