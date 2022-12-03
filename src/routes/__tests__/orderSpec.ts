import supertest from 'supertest';
import app from '../../index';
const request = supertest(app);

// eslint-disable-next-line 
let tokenText: any;
describe('Order routes method', () => {
  beforeAll(async () => {
    tokenText = await request.post('/api/user/login').send({
      email: 'nam1@gmail.com',
      password: 'nam205806',
    });
  });

  it('Get all', async () => {
    const token = JSON.parse(tokenText.text);
    const res = await request
      .get('/api/order')
      .set('Authorization', `Bearer ${token.data.token}`);
    expect(res.statusCode).toBe(200);
  });

  it('Create ', async () => {
    const token = JSON.parse(tokenText.text);
    const res = await request
      .post('/api/order')
      .set('Authorization', `Bearer ${token.data.token}`)
      .send({
        status: 1,
        quantity: 5,
        user_id: token.data.id,
      });
    expect(res.statusCode).toBe(200);
  });
});
