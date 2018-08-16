const Provider = require('../models/provider')
const providersCtrl = {}




providersCtrl.getProviders = async (req, res) =>{
    const providers = await Provider.find()
    res.json(providers)
}




providersCtrl.createProvider = async (req, res) =>{
    const newProvider = new Provider(req.body)
    //console.log(nuevoEmpleado)
    newProvider.save();
    res.json({
        status: "Provider save"
    })
}






providersCtrl.getProvider = async (req, res) =>{
    const provider = await Provider.findById(req.params.id)
    res.json(provider)
}







providersCtrl.editProvider = async (req, res) =>{
    const {id} = req.params

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

    await Provider.findByIdAndUpdate(id, {$set: provider}, {new: true})

    res.json({
        status: 'Providers update'
    })
}





providersCtrl.deleteProvider = async (req, res) =>{
    await Provider.findByIdAndRemove(req.params.id)
    res.json({status: "Provider Delete"})
}



module.exports = providersCtrl