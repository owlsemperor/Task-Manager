const mongoose = require('mongoose')

const connectDB = async (url) => {
  try {
    await mongoose.connect(url, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    })
    console.log('CONNECTED TO THE DB...')
  } catch (error) {
    console.error('Error connecting to the database:', error)
    throw error
  }
}

module.exports = connectDB
