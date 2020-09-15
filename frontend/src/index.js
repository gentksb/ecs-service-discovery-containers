const express = require('express');
const { env } = require('process');
const axios = require('axios').default;
const app = express()
const requestParam = {
  url: '/',
  baseURL: env.BACKEND_HOST_URL
}


app.get('/', async (req, res) => {
  const internalResponse = await axios.request(requestParam)
    .then((response) => {
      // handle success
      console.log(response);
      return response.data
    })
    .catch((error) => {
      // handle error
      console.log(error);
      return error
    })
  res.send(`<h1>ECS-fargate Service Discovery DEMO</h1>\r<code>${internalResponse}</code>`)
})

app.listen(80)