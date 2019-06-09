const express = require('express');
const app = express();
const chalk = require('chalk')
const middlewares = require('./middlewares/middleware')(app)
const productRoutes = require('./routes/products')(app)

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`listening to ${chalk.yellow(port)}`))
