const mongoose  = require('mongoose')
const Product = mongoose.model('products')


module.exports = (app) => {

app.get('/products', (req,res) => {
  const FindCake = async () =>{
    const cakes = await Product.find()
    res.send(cakes)
  }
  FindCake()

})

app.post('/products', (req,res) => {
  const CreateProduct = async () => {
    const product = new Product({
      name: req.body.name,
      price: req.body.price,
      available: req.body.available
   })
   const result = await product.save()

 res.send(result)
 console.log(result)
}
CreateProduct()
})

}
