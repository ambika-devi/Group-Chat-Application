const express=require('express');
const router=express.Router();
router.get('/login',(req,res)=>{
    res.send('<form action="/" method="POST" onsubmit="localStorage.setItem(`username`,document.getElementById(`username`).value)"><input id="username" type="text" name="username"><button type="submit">LOGIN</button></form>');
    
})//user login
module.exports=router;