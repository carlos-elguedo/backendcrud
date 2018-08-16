const mongoose = require('mongoose')
const {Schema} = mongoose

const Provider = new Schema({
    address: {type: String},
    city: {type: String, required: true},
    createdAt: {type: Date, default: Date.now()},
    createdBy: {type: String, default: 'CarlosE'},
    document: {type: String},
    email: {type: String, required: true},
    firstName: {type: String},
    fullName: {type: String},
    lastName: {type: String},
    name: {type: String},
    projectedStartDate: {type: Date},
    specialty: {type: String},
    status: {type: String},
    updateAt: {type: Date}
})

Provider.pre('save', (next)=>{
    let provider = this

    provider.fullName = provider.firstName + " " + provider.lastName

    next()
})

module.exports = mongoose.model("Provider", Provider)