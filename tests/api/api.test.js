const request = require('supertest');
const BASE = 'https://jsonplaceholder.typicode.com';

describe('JSONPlaceholder posts API', () => {
  test('GET /posts returns 200', async () => {
    const res = await request(BASE).get('/posts');
    expect(res.statusCode).toBe(200);
  });

  test('GET /posts/1 returns id = 1', async () => {
    const res = await request(BASE).get('/posts/1');
    expect(res.statusCode).toBe(200);
    expect(res.body.id).toBe(1);
  });
});
