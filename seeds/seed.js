const sequelize = require('../config/connection');
const { User, Client, Sale, SaleProduct, Product } = require('../models');

const userData = require('./userData.json');
const productData = require('./productData.json');
const saleProductData = require('./saleProductData.json');
const saleData = require('./saleData.json');
const clientData = require('./clientData.json');


const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  const clients = await Client.bulkCreate(clientData)
  const products = await Product.bulkCreate(productData);
  const sales = await Sale.bulkCreate(saleData)
  const saleProducts = await SaleProduct.bulkCreate(saleProductData)


  process.exit(0);
};

seedDatabase();
