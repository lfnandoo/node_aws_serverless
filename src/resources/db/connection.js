const mongoose = require('mongoose')

let connection = null

const URI =
  'mongodb+srv://secret:7APb6aztL2JMwqQ4@cluster0.2pdpa.mongodb.net/secret?retryWrites=true&w=majority'

module.exports = async () => {
  if (!connection) {
    connection = mongoose.connect(URI, {
      useNewUrlParser: true,
      useCreateIndex: true
    })

    await connection
  }
}
