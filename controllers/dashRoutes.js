const router = require('express').Router();
const withAuth = require('../utils/auth')
// Require Model
// Require heper functions

// CRUD Operations

router.get('/', async (req,res)=>{   
    try{
        res.render('homepage',
        {
            loggedIn: req.session.loggedIn
        })
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

router.get('/dashboard',withAuth ,async (req,res)=>{   
    try{
        res.render('dashboard',
        {
            loggedIn: req.session.loggedIn
        })
    } catch(err){
        res.status(400).json(err)
    }
})

router.get('/sales',withAuth ,async (req,res)=>{   
    try{
        res.render('sales',
        {
            loggedIn: req.session.loggedIn
        })
    } catch(err){
        res.status(400).json(err)
    }
})


module.exports = router;