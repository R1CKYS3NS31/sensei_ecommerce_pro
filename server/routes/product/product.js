const router = require('express').Router()

router.get('/products', (req,res)=>{
    res.send('products successfull')
    console.log('products successfull!');
})


module.exports=router