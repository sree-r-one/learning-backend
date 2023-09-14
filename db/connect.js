const mongoose = require('mongoose');
 
const connectDB = () => {
//   return mongoose.connect('mongodb://localhost:27017/EXPRESSCOURSE', {
  return mongoose.connect('mongodb://127.0.0.1:27017/EXPRESSCOURSE', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
}

module.exports = connectDB    