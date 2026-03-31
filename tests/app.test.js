const request = require('supertest');
const app = require('../index');

describe('Math API Tests', () => {

  test('GET / should return Hello World', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
    expect(res.text).toBe('Hello World!');
  });

  // ➕ ADD
  test('POST /add should return sum', async () => {
    const res = await request(app)
      .post('/add')
      .send({ a: 5, b: 3 });

    expect(res.statusCode).toBe(200);
    expect(res.body.result).toBe(8);
  });

  // ✖️ MULTIPLY
  test('POST /multiply should return product', async () => {
    const res = await request(app)
      .post('/multiply')
      .send({ a: 4, b: 2 });

    expect(res.statusCode).toBe(200);
    expect(res.body.result).toBe(8);
  });

  // ➗ DIVIDE
  test('POST /divide should return division', async () => {
    const res = await request(app)
      .post('/divide')
      .send({ a: 10, b: 2 });

    expect(res.statusCode).toBe(200);
    expect(res.body.result).toBe(5);
  });

  // ❌ Divide by zero
  test('POST /divide should fail when dividing by zero', async () => {
    const res = await request(app)
      .post('/divide')
      .send({ a: 10, b: 0 });

    expect(res.statusCode).toBe(400);
    expect(res.body.error).toBe('Cannot divide by zero');
  });

  // ❌ Invalid input
  test('POST /add should fail with invalid input', async () => {
    const res = await request(app)
      .post('/add')
      .send({ a: "5", b: 3 });

    expect(res.statusCode).toBe(400);
  });

});


// const request = require('supertest');
// const app = require('../index');

// test('GET /', async () => {
//   const res = await request(app).get('/');
//   expect(res.statusCode).toBe(200);
// });