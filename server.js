const express = require('express');
const session = require('express-session');
const { engine } = require('express-handlebars');
const moment = require('moment');
const routes = require('./controllers');
const sequelize = require('./config/connection'); 
const SequelizeStore = require('connect-session-sequelize')(session.Store);

// Conditionally load dotenv when not in production
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const app = express();
const PORT = process.env.PORT || 3000;

const sess = {
  secret: 'Super secret secret',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

app.use(session(sess));

app.engine('handlebars', engine({
  defaultLayout: 'main',
  helpers: {
    formatDate: function (date, format) {
      return moment(date).format(format);
    }
  }
}));

app.set('view engine', 'handlebars');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use(routes);  

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening on http://localhost:' + PORT));
});
