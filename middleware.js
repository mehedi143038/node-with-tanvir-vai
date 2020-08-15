const express = require('express');
const app = express();

function middleware1(req, res, next){
    console.log('This is middleware #1');
    next();
}

function middleware2(req, res, next){
    console.log('This is middleware #2');
    next();
}

app.use(middleware1);

app.get('/', (req, res, next)=>{
    res.send('Hello Mehedi');
    console.log('this is from path special default path');
    next();
}, middleware2)

app.get('/user', (req, res, next)=>{
    res.send('This is from users');
    console.log('hello from users');
})

const PORT = process.env.PORT || 3000;

app.listen(PORT, ()=>{
    console.log(`Server is running at ${PORT}`);
})