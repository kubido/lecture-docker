const { MongoClient } = require('mongodb')
const dbUrl = 'mongodb://mongo:27017'
const client = new MongoClient(dbUrl, { useUnifiedTopology: true })
const dbName = 'expressDocker'

const connect = async () => await client.connect()
connect()

const db = client.db(dbName)

// seed
const seed = async () => {
  db.collection('users').insertOne({
    name: "John",
    ag: 40
  })
}
seed()


module.exports = db 
