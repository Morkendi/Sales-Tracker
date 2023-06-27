const express = require('express');
const path = require('path');
const session = require('express-session');
const exphbs = require('express-handlebars');
const routes = require('./controllers');
const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;

const hbs = exphbs.create({
  // Set your handlebars configuration options here
  // ...
  helpers: {
    multiply: function(a, b) {
      return a * b;
    },
    areEqual: function(value, value2) {
      return value === value2;
    },
    calculateTotalSales: function(sales) {
      let totalSales = 0;
      sales.forEach((sale) => {
        totalSales += sale.products.reduce((sum, product) => sum + (product.sale_product.quantity * product.price), 0);
      });
      return totalSales.toFixed(2); // Assuming you want to display the total with 2 decimal places
    },
    getDate: function() {
      const months = ["January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December"];
      const currentDate = new Date().getMonth();
      const currentMonth = months[currentDate];
      return currentMonth;
    },
    calculateCom: function(sales) {
      let totalSales = 0;
      let commisions = 0;
      sales.forEach((sale) => {
        totalSales += sale.products.reduce((sum, product) => sum + (product.sale_product.quantity * product.price), 0);
        commisions = totalSales*0.12;
      });
      return commisions.toFixed(2); // Assuming you want to display the total with 2 decimal places
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