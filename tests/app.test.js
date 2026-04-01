const request = require('supertest');
const app = require('../index');

describe('Math API Tests', () => {

   test('GET/should test msg', async() => { 
     const res = await request(app).get('/')
     expect(res.statusCode).toBe(200);
     expect(res.text).toBe('Hello World!, Hi');
   })

   test('POST /add should return sum of two numbers', async() => {
    const res = await request(app).post('/add')
    .send({num1:5,num2:10})
    expect(res.statusCode).toBe(200);
    expect(res.body.result).toBe(15)
   })
   
});


// const request = require('supertest');
// const app = require('../index');

// test('GET /', async () => {
//   const res = await request(app).get('/');
//   expect(res.statusCode).toBe(200);
// });