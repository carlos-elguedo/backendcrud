const mongoose = require('mongoose')

const config = require('./config')

const URL = config.DATABASE_URL

mongoose.connect(URL)
    .then(db => console.log('Conectado a mongo'))
    .catch(err => console.error(err))

module.exports = mongoose