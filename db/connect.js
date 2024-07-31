const mongoose = require('mongoose')

const connectDB = async (url) => {
  try {
    await mongoose.connect(url)
    console.log('MongoDB Connected...')
  } catch (error) {
    console.log('Error connecting to MongoDB:', error)
    throw error
  }
}

module.exports = connectDB
