const mongoose = require('mongoose')

const config = require('./config')

const URL = config.DATABASE_URL

mongoose.connect(URL, { useNewUrlParser: true })
    .then(db => console.log('Connect to mongodb'))
    .catch(err => console.error(err))

module.exports = mongoose