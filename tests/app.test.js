const request = require('supertest');
const app = require('../index');

describe('Math API Tests', () => {

   test('GET/should test msg', async() => { 
     const res = await request(app).get('/')
     expect(res.statusCode).toBe(200);
     expect(res.text).toBe('Hello World!, Hi');
   })
   
});


// const request = require('supertest');
// const app = require('../index');

// test('GET /', async () => {
//   const res = await request(app).get('/');
//   expect(res.statusCode).toBe(200);
// });