const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('This section backend API response')
})

app.listen(8000)