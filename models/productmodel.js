const mongoose = require('mongoose')
const { Schema } = mongoose.Schema

const ProductSchema = new Schema({
  productname: String,
  price: Number,
  available: Boolean;
})

const Product = mongoose.model('products',ProductSchema)
module.export = Product;
