const mongoose = require('mongoose')

let connection = null

const URI =
  'mongodb+srv://secret:6dR5sa50u5p9kawZ@cluster0.2pdpa.mongodb.net/secret?retryWrites=true&w=majority'

module.exports = async () => {
  if (!connection) {
    connection = mongoose.connect(URI, {
      useNewUrlParser: true,
      useCreateIndex: true
    })

    await connection
  }
}
