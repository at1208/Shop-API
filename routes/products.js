
module.exports = (app) => {
const product = [{ name:'shoes', price:1000},
                 { name:'T-shirt',price:800},
                 { name:'pant',price:1200},
                 { name:'belt', price:300 }]


app.get('/products', (req,res) => {
res.json(product)
})

app.post('/products',(req,res) => {
 const items = {
      name: req.url.name,
      price: req.url.price
 }
 res.json(product.length)
})
}
