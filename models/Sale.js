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
      product: {
        type: DataTypes.STRING,
        references: {
            model: 'product',
            key: 'id',
        },
      },
      client: {
        type: DataTypes.STRING,
        references: {
            model: 'client',
            key: 'id',
        },
      },
      quantity: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      date_created: {
        type: DataTypes.DATE,
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
  