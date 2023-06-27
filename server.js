const express = require('express');
const path = require('path');
const session = require('express-session');
const exphbs = require('express-handlebars');
const routes = require('./controllers');
const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const _ = require('lodash');


const app = express();
const PORT = process.env.PORT || 3001;

const hbs = exphbs.create({
  // Set your handlebars configuration options here
  // ...
  helpers: {
    multiply: _.multiply, // Use lodash's multiply function
    areEqual: _.isEqual, // Use lodash's isEqual function
    calculateTotalSales: function(sales) {
      const totalSales = _.sumBy(sales, (sale) =>
        _.sumBy(sale.products, (product) =>
          _.multiply(product.sale_product.quantity, product.price)
        )
      );
      return _.round(totalSales, 2); // Use lodash's round function
    },
    getDate: function() {
      const months = ["January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December"];
      const currentMonth = _.nth(months, new Date().getMonth()); // Use lodash's nth function
      return currentMonth;
    },
    calculateCom: function(sales) {
      const totalSales = _.sumBy(sales, (sale) =>
        _.sumBy(sale.products, (product) =>
          _.multiply(product.sale_product.quantity, product.price)
        )
      );
      const commisions = _.multiply(totalSales, 0.12);
      return _.round(commisions, 2); // Use lodash's round function
    },
  }
});

const sess = {
  secret: process.env.CKIE_SCRT,
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

app.use(session(sess));

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Server listening on: http://localhost:' + PORT));
});