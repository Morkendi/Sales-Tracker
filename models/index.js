const User = require('./User');
const Sale = require('./Sale');

User.hasMany(Project, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
  });

  Sale.belongsTo(User, {
    foreignKey: 'user_id'
  });
 

module.exports = { User, Sale };