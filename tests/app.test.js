const request = require('supertest');
const app = require('../index');

describe('Math API Tests', () => {

  test('GET / should return Hello World', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
    expect(res.text).toBe('Hello World!, Welcome to the DevOps Backend Server, This is a simple Express application for testing purposes.');
  });

});


// const request = require('supertest');
// const app = require('../index');

// test('GET /', async () => {
//   const res = await request(app).get('/');
//   expect(res.statusCode).toBe(200);
// });