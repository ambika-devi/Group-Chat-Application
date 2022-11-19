const express=require('express');
const fs=require('fs');
const router=express.Router();
router.post('/',(req,res)=>{
    res.send(`
    <form action="/msg" method="POST" onsubmit='document.getElementById("username").value=localStorage.getItem("username")'>
    <input type="hidden" name=username id="username" />
    <input type="text" name="msg"/>
    <button type="submit">SEND</button></form>`
);
})
router.post('/msg',(req,res)=>{
    
    //console.log(req.body);
    fs.appendFileSync("message.txt",`${req.body.username} : ${req.body.msg}`)//parsing data
    res.redirect('/');
})
router.get('/',(req,res)=>{
    fs.readFile("message.txt",(err,data)=>{
        if(err){
            console.log(err);
            data='No data is present here';//executes only if message.txt file is not present;
        }
        res.send(`<p>${data}</p></hr>
        <form action="/msg" method="POST" onsubmit="document.getElementById("username").value=localStorage.getItem("username")">
        <input type="hidden" id="username" name="username"/>
        <input type="text" name="msg"/>
        <button type="submit">SEND MESSAGE</button></form>`)
    })
})
module.exports=router;