const express = require('express');
const router = require('express').Router();
const apiRoutes = require('./api');
const database = require ('../sales_db')
router.use('/api', apiRoutes);


module.exports = router;
