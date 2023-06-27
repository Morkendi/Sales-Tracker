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
            loggedIn: req.session.loggedIn,
            user_id: req.session.user_id
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
        const sale = await Sale.findAll({
            where: {
                user_id: req.session.user_id
            },
        include: [{
                model: Client,
            },
            {
            model: Product,
            through: SaleProduct,
            foreignKey: "sale_id",
            attributes: ['product_name','price']}]
        })
    
        const sales = sale.map((singleSale) => singleSale.get({ plain: true }));

        const client = await Client.findAll()

        const clients = client.map((eachclient) => eachclient.get({plain: true}))
        
        res.render('dashboard',
        {
            clients,
            sales,
            loggedIn: req.session.loggedIn,
            loggedUsername: req.session.name,
            user_id: req.session.user_id 
        })
    } catch(err){
        res.status(400).json(err)
    }
})

router.get('/sales',withAuth ,async (req,res)=>{   
    try{
        const saleData = await Sale.findAll({
            where: {
                user_id: req.session.user_id
            },
        include: [{
                model: Client,
            },
            {
            model: Product,
            through: SaleProduct,
            foreignKey: "sale_id",
            attributes: ['product_name','price']}]
        })

        const sales = saleData.map((singleSale) => singleSale.get({ plain: true }));

        res.render('sales',
        {
            sales,
            loggedIn: req.session.loggedIn,
            loggedUsername: req.session.name,
            user_id: req.session.user_id 
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
            loggedUsername: req.session.name, 
            products,
            user_id: req.session.user_id
        })
    } catch(err){
        res.status(400).json(err)
    }
})

router.get('/employee/:id', withAuth, async (req,res)=>{
    try{
        const employeeData= await User.findByPk(req.params.id)

        const employee = employeeData.get({ plain: true });

        res.render('employee',
        {
            loggedIn: req.session.loggedIn,
            loggedUsername: req.session.name, 
            employee,
            user_id: req.session.user_id
        })
    } catch(err) {
        res.status(400).json(err)
    }
})

module.exports = router;