
const express = require('express')
const app = require('./app')
const mongoose = require('mongoose')
require('dotenv').config();
const port = process.env.PORT || 8000;

// Parse JSON bodies (as sent by API clients)
app.use(express.json())
app.use(express.urlencoded({ extended: false }));

// Connect to DATABASE
const DATABASE_URL = `mongodb+srv://${process.env.USER_NAME}:${process.env.PASSWORD}@cluster0.ecrelzc.mongodb.net/?retryWrites=true&w=majority`;
mongoose.connect(DATABASE_URL,{ useNewUrlParser: true, 
    useUnifiedTopology: true });
const db = mongoose.connection
.then('open', () => console.log('connected to database'))
.catch(('error', (err) => console.log('failed to connect')))
// Start Server
app.listen(port, () => console.log(`App listening on port ${port}!`))
