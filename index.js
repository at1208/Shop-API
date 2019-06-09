const express = require('express');
const app = express();
const chalk = require('chalk')
const mongoose = require('mongoose')
const middlewares = require('./middlewares/middleware')(app)
const productRoutes = require('./routes/products')(app)

mongoose.connect('mongodb://localhost:27017/shop')
.then(()=> console.log(chalk.red.bgWhite('Connected to MongoDB')))
.catch((err)=> console.log(err))

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`listening to ${chalk.blue.bgYellow(port)}`))
