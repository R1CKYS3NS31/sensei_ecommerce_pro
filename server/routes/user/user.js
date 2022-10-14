const router = require('express').Router()

router.get('/users', (req,res)=>{
    res.send('user successfull')
    console.log('user');
})
router.post('/users',(req,res)=>{
    const username = req.body.username
    res.send('your username is: '+username)
    console.log(username);
})

module.exports=router