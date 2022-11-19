const express=require('express');
const bodyParser=require('body-parser');
const loginPage=require('./routes/login.js');
const homePage=require('./routes/homePage');
const app =express();
app.use(bodyParser.urlencoded({extended:false}));
app.use(loginPage);
app.use(homePage);
app.use((req,res)=>{
    res.status(404).send('<h1>Page Not Found</h1>')
});
app.listen(3000);