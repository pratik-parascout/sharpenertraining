const express = require('express');

const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./utils/database');
const sequelize = require('./utils/database');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(cors());

const mainRoutes = require('./routes/main');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', mainRoutes);

sequelize
  .sync()
  .then((result) => {
    app.listen(3000);
  })
  .catch((err) => {
    console.log(err);
  });
