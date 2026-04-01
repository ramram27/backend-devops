const request = require('supertest');
const app = require('../index');

describe('Math API Tests', () => {

   test('GET/should test msg', async() => { 
     const res = await request(app).get('/')
     expect(res.statusCode).toBe(200);
     expect(res.text).toBe('Hello World!, server is up and running');
   })

   test('POST /add should return sum of two numbers', async() => {
    const res = await request(app).post('/add')
    .send({num1:5,num2:10})
    expect(res.statusCode).toBe(200);
    expect(res.body.result).toBe(15)
   })

   test('POST / Regsiter data should retun', async()=>{
    const res = await request(app).post('/register')
    .send({name:"Rohit",rollNum:123,emailId:"rohit@gmail.com",passwrd:"12345"})
    expect(res.statusCode).toBe(200);
    expect(res.body.data).toEqual({name:"Rohit",rollNum:123,emailId:"rohit@gmail.com",passwrd:"12345"})

   })

   test('POST /multiply should return product of two numbers', async() => {
    const res = await request(app).post('/multiply')
    .send({num1:10,num2:12})
    expect(res.statusCode).toBe(200);
    expect(res.body.result).toBe(120)
   })


   
});


// const request = require('supertest');
// const app = require('../index');

// test('GET /', async () => {
//   const res = await request(app).get('/');
//   expect(res.statusCode).toBe(200);
// });