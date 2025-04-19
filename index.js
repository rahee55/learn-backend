require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello Tariq Raheem!')
})

app.get('/google', (req, res) => {
    res.send('This is Basic lesson of backend')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})