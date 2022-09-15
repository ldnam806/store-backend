import supertest from 'supertest';
import server from '../index';

const request = supertest(server);
describe('Test endpoint', () => {
  it('Gets the /api/product endpoint', async () => {
    const response = await request.get('/api/product');
    expect(response.status).toBe(200);
  });
});
