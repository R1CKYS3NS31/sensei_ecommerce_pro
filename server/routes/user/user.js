const router = require('express').Router()

router.get('/users', (req,res)=>{
    res.send('user successfull')
    console.log('user successfull!');
})

module.exports=router