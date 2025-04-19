require('dotenv').config()
const express = require('express')
const app = express()
const port = ''

app.get('/', (req, res) => {
  res.send('Hello Tariq Raheem!')
})

app.get('/google', (req, res) => {
    res.send('<h1>This is Basic lesson of backend</h1>')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})