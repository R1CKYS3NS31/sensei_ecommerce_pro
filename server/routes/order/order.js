const router = require('express').Router()

router.get('/order', (req,res)=>{
    res.send('order successfull')
    console.log('oder successfull!');
})


module.exports=router