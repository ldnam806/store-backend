import supertest from 'supertest';
import app from '../../index';
const request = supertest(app);
// eslint-disable-next-line
let tokenText: any;
describe('User routes method', () => {
  beforeAll(async () => {
    tokenText = await request.post('/api/user/login').send({
      email: 'nam1@gmail.com',
      password: 'nam205806',
    })
  });

  it('Create user ', async () => {
    const response = await request.post('/api/user').send({
        firstName: 'le',
        lastName: 'nam',
        email: 'nam1@gmail.com',
        password: 'nam205806'
    });
    expect(response.statusCode).toEqual(200);
  });


  it('Auth with email & password', async () => {
    const response = await request.post('/api/user/login').send({
        email: 'nam1@gmail.com',
        password: 'nam205806'
    });
    expect(response.statusCode).toEqual(200);
  });


  it('Get all', async () => {
      const token = JSON.parse(tokenText.text)
      const res = await request
      .get('/api/user')
      .set('Authorization', `Bearer ${token.data.token}`)
      expect(res.statusCode).toEqual(200);
  });

});
