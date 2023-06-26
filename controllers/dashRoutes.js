const router = require('express').Router();
const withAuth = require('../utils/auth')
const { Sale, SaleProduct, User, Client, Product } = require('../models');
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
       /* const sale = await Sale.findAll({
            where: {
                user_id: req.session.user_id
            },
           include: [{
                model: Client,
            },
            {
                model: SaleProduct,
                foreignKey: "sale_id",
                attributes: ['quantity'],
                include: {
                        model: Product,
                        foreignKey: "product_id",
                        attributes: ['product_name','price']
                }
            }]
        })
    
        const sales = sale.map((singleSale) => singleSale.get({ plain: true }));*/

        const search = await SaleProduct.findAll({
            include: { 
                model: Product,
                foreignKey: "product_id",
                attributes: ['product_name','price']}
        })

        const searches = search.map((singleSale) => singleSale.get({ plain: true }));
        //const saleInfo = sale.sale_products.map((ola)=> ola.get({}))

        console.log(searches)
        //console.log(sales)

       // console.log(saleInfo)

        res.render('dashboard',
        {
           // sales,
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

router.get('/products',withAuth ,async (req,res)=>{   
    try{
        const productData = await Product.findAll();
        const products = productData.map((singleProduct) => singleProduct.get({ plain: true }));

        res.render('products',
        {
            loggedIn: req.session.loggedIn,
            products
        })
    } catch(err){
        res.status(400).json(err)
    }
})
module.exports = router;