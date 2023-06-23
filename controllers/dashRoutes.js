const router = require('express').Router();
const withAuth = require('../utils/auth')
// Require Model
// Require heper functions

// CRUD Operations

router.get('/', withAuth, async (req,res)=>{   
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

router.get('/dashboard', async (req,res)=>{   
    try{
        res.render('dashboard')
    } catch(err){
        res.status(400).json(err)
    }
})


module.exports = router;