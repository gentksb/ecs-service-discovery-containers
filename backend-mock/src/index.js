const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('{comment : This section is backend API response}')
})

app.listen(8000)