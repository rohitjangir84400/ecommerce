require('dotenv').config()

const productData = require('./data/dummyData')
const connectDB = require('./db/connectdb');
const Product = require('./models/productModel');

connectDB()

const importData = async () => {
  try {
    await Product.deleteMany({})

    await Product.insertMany(productData)

    console.log('Data Import Success')

    process.exit()
  } catch (error) {
    console.error('Error with data import', error)
    process.exit(1)
  }
}

importData()
