const router = require('express').Router();
// Require Model
// Require heper functions

// CRUD Operations

router.get('/', async (req,res)=>{   
    try{
        res.render('homepage')
    } catch(err){
        res.status(400).json(err)
    }
})


router.get('/login', async (req,res)=>{   
    try{
        res.render('login');
    } catch(err){
        res.status(400).json(err)
    }
})


module.exports = router;