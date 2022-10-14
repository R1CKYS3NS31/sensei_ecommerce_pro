const router = require('express').Router()

router.get('/cart', (req,res)=>{
    res.send('cart successfull')
    console.log('cart successfull!');
})


module.exports=router