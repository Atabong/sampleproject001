const request = require('supertest');
const app = require('../index');

describe('Smoke tests', () => {
  test('GET /api/health returns ok status', async () => {
    const response = await request(app).get('/api/health');
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual({ status: 'ok' });
  });

  test('POST /api/echo echoes request body and method', async () => {
    const payload = { message: 'hello' };
    const response = await request(app)
      .post('/api/echo')
      .send(payload);
    expect(response.statusCode).toBe(200);
    expect(response.body.method).toBe('POST');
    expect(response.body.body).toEqual(payload);
  });
});
