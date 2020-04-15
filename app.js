const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000

app.get('/', async (req, res) => {
  res.send('Running inside a docker container !')
})

app.listen(PORT, () => {
  console.log('Express server started at port : ' + PORT);
})