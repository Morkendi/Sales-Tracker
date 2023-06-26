const router = require('express').Router();
const withAuth = require('../utils/auth')
const { Sale, SaleProduct, User, Client } = require('../models');
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
        const sales = await Sale.findAll({
            where: {
                user_id: req.session.user_id
            },
            include: [{
                model: Client,
                /*through: 'SaleProduct',
                foreignKey: 'sale_id',
                //attributes: ['id','sale_id','product_id','quantity']*/
            },
            {
                model: SaleProduct,
                foreignKey: "sale_id"
            }]
        })
    
        const sale = sales.map((singleSale) => singleSale.get({ plain: true }));

       // const saleInfo = sale.sale_products.map((ola)=> ola.get({ plain: true }))

        console.log(sale.sale_products)
       // console.log(saleInfo)

        res.render('dashboard',
        {
            sale,
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