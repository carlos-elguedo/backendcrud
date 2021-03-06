/**
 * @author Carlos Elguedo
 * @version 0.0.1
 * File in charge of managing and controlling the operations requested to the api
 */

const Provider = require('../models/provider')

//Controller to export
const providersCtrl = {}

//To receive the GET operations, to find all the data
providersCtrl.getProviders = async (req, res) =>{
    const providers = await Provider.find()
    res.json(providers)
}


//To create new documents POST
providersCtrl.createProvider = async (req, res) =>{
    //A new provider is defined based on the parameters received
    const newProvider = new Provider(req.body)
    //The new document is saved
    newProvider.save();
    //An answer message is sent
    res.json({
        status: "Provider save"
    })
}





//To obtain a specific document
providersCtrl.getProvider = async (req, res) =>{
    const provider = await Provider.findById(req.params.id)
    res.json(provider)
}


//To edit a document PUT
providersCtrl.editProvider = async (req, res) =>{
    //you get the id of the parameter received
    const {id} = req.params

    //A new document is defined based on the received
    const provider = {        
        address: req.body.address,
        city: req.body.city,
        document: req.body.document,
        email: req.body.email,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        specialty: req.body.specialty,
        status: req.body.status,
    }

    //The document is found and updated GET
    await Provider.findByIdAndUpdate(id, {$set: provider}, {new: true})
    //A confirmation message was returned
    res.json({
        status: 'Providers update'
    })
}


//To delete a specific document DELETE
providersCtrl.deleteProvider = async (req, res) =>{
    //It finds and removes the document to be deleted
    await Provider.findByIdAndRemove(req.params.id)
    //A confirmation message was returned
    res.json({status: "Provider Delete"})
}



module.exports = providersCtrl