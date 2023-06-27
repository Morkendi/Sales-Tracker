const express = require('express');
const router = require('express').Router();
const apiRoutes = require('./api');
const database = require ('../sales_db')
router.use('/api', apiRoutes);

router.get('/', function(req, res, next) {
    const query= "SELECT * from sales_db ORDER BY id ASC"; 
    database.query(query)
})

module.exports = router;
