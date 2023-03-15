const mongoose = require('mongoose')
const subscriberModel = require('./models/subscribers')
const data = require('./data')
require('dotenv').config();

// Connect to DATABASE
//user id and password are from my secondary account
const DATABASE_URL = `mongodb+srv://${process.env.USER_NAME}:${process.env.PASSWORD}@cluster0.ecrelzc.mongodb.net/?retryWrites=true&w=majority`;
//console.log(DATABASE_URL);
mongoose.connect(DATABASE_URL,{ useNewUrlParser: true, useUnifiedTopology: true })
.then(()=>console.log("connected"))
.catch((err)=>console.log(err))
// const db = mongoose.connection
// db.on('error', (err) => console.log(err))
// db.once('open', () => console.log('Database created...'))

const refreshAll = async () => {
    await subscriberModel.deleteMany({})
    // console.log(connection)
    await subscriberModel.insertMany(data)
    await mongoose.disconnect();
}
refreshAll()