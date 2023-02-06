const express = require('express')
const { registerValidation } = require('./validate')
const app = express()
const port = 3000
// app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.use(express.json());
app.get('/', (req, res) => {
  res.send('Hello Joi!')
})

app.post('/register', (req, res) => {
  console.log(req.body)
    const { error } = registerValidation(req.body)
    console.log(error, req.body)
    if(error) return res.status(400).send(error.details)
    res.send('Validation successful')
})
  

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})