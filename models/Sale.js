const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Sale extends Model {}

Sale.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      user_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'user',
          key: 'id',
        },
      },
      product_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'product',
            key: 'id',
        },
      },
      client_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'client',
            key: 'id',
        },
      },
      date_created: {
        type: DataTypes.DATEONLY,
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
    },
    {
      sequelize,
      timestamps: false,
      freezeTableName: true,
      underscored: true,
      modelName: 'sale',
    }
  );
  
  module.exports = Sale;
  