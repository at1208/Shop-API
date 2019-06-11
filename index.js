const express = require('express');
const app = express();
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const morgan = require('morgan')
app.use(bodyParser.json())
app.use(morgan('combined'))
app.use(bodyParser.urlencoded({ extended: true }))



require('./models/productmodel')
require('./routes/products')(app)


mongoose.connect('mongodb://localhost:27017/shop')
.then(()=> console.log(('Connected to MongoDB')))
.catch((err)=> console.log(err))



const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`listening to ${(port)}`))
