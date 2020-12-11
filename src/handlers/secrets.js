require('../resources/db/connection')()

const { v4: uuidv4 } = require('uuid')

const SecretModel = require('../resources/db/models/Secret')

module.exports.create = async (event, context) => {
  // good practice for lambda functions in AWS
  context.callbackWaitsForEmptyEventLoop = false

  const { name, email } = JSON.parse(event.body)

  const externalId = uuidv4()
  const adminKey = uuidv4()

  try {
    await SecretModel.create({
      owner: name,
      ownerEmail: email,
      externalId,
      adminKey
    })

    return {
      statusCode: 201,
      body: JSON.stringify({
        success: true,
        id: externalId,
        adminKey
      })
    }
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        success: false
      })
    }
  }
}

module.exports.get = async (event) => {}

module.exports.draw = async (event) => {}
