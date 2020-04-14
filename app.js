const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000

const db = require('./config/mongo')

app.get('/', async (req, res) => {
  const users = await db.collection('users').find({}).toArray()
  console.log('--->', users);

  res.send(users)
})

app.listen(PORT, () => {
  console.log('Express server started at port : ' + PORT);
})