const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({
  name: String,
  price: Number,
  available: Boolean
})

mongoose.model('products',ProductSchema)
