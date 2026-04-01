const express = require('express');
const app = express();

const port = 3000;

app.use(express.json());

console.log('Express app initialized');
// Health check
console.log('Setting up basic route...');
app.get('/', (req, res) => {
    res.send('<h1>Hello World!, server is up and running</h1>');
});

app.post('/add', async(req,res) =>{
    const {num1,num2} = req.body;

    if(typeof num1 != 'number' || typeof num2 != 'number') {
        return res.status(400).json({err:"Invalid input"});
    }
    res.json({result: num1 + num2});
})

app.post('/register', async(req,res) =>{
    const {name,rollNum,emailId,passwrd} = req.body;

    if(!name || !rollNum || !emailId || !passwrd) {
        return res.status(400).json({err:"All fields are required"});
    }
    res.json({data:{name,rollNum,emailId,passwrd}});
})

app.post('/multiply', async(req,res) =>{
    const {num1,num2} = req.body;

    if(typeof num1 != 'number' || typeof num2 != 'number') {
        return res.status(400).json({err:"Invalid input"});
    }
    res.json({result: num1 * num2});
})

module.exports = app;

if (process.env.NODE_ENV !== 'test') {
    app.listen(port, () => {
        console.log(`Server is running on http://localhost:${port}`);
    });
}



// const express = require('express');
// const app = express();
// const port = 3000;

// app.use(express.json());
// console.log('Server is starting... ');
// console
// app.get('/', (req, res) => {
//     res.send('Hello World!, Welcome to the DevOps Backend Server');
// });
// console.log('Basic route set up...');
// app.post('/add', (req, res) => {
//     const { a, b } = req.body;

//     if (typeof a !== 'number' || typeof b !== 'number') {
//         return res.status(400).json({ error: 'Invalid input' });
//     }

//     res.json({ result: a + b });
// });

// app.post('/data', (req, res) => {
//     const data = req.body;
//     console.log('Received data:', data);
//     res.send('Data received successfully!');
// });

// if(process.env.NODE_ENV !== 'test') {
// app.listen(port, () => {
//     console.log(`Server is running on http://localhost:${port}`);
// });
// }