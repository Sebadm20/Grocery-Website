const express = require('express')
const { products__items } = require('./constants/products')
const app = express()
const port = 3000
const id = req.params.id;

app.get('/products', (req, res) => {

  res.send(products__items)
})
app.get(`/product/${id}`, (req, res) => {
  const filteredProduct = products__items.filter( product => product.id === id)
  res.send(filteredProduct)
})

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})