
const User = require('./User');
const Sale = require('./Sale');
const Client = require('./Client');
const Product = require('./Product');
const SaleProduct = require('./SaleProduct');

User.hasMany(Sale, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});
Sale.belongsTo(User, {
  foreignKey: 'user_id'
});
Sale.belongsTo(Client, {
  foreignKey: 'client_id'
});
Sale.belongsToMany(Product, {
  through: SaleProduct,
  foreignKey: 'sale_id'
});
Product.belongsToMany(Sale, {
  through: SaleProduct,
  foreignKey: 'product_id'
});
Client.hasMany(Sale, {
  foreignKey: 'client_id',
});

Sale.hasMany(SaleProduct,{
  foreignKey: "sale_id"
})

SaleProduct.belongsTo(Sale, {
  foreignKey: "sale_id"
})

SaleProduct.hasOne(Product)

Product.belongsTo(SaleProduct)


module.exports = { User, Sale, Client, Product, SaleProduct };
