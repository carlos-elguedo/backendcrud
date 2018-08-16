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
        status: "Empleado guardado"
    })
}






providersCtrl.getProvider = async (req, res) =>{
    const provider = await Provider.findById(req.params.id)
    res.json(provider)
}







providersCtrl.editProvider = async (req, res) =>{
    const {id} = req.params

    const provider = {
        nombre: req.body.nombre,
        posicion: req.body.posicion,
        oficina: req.body.oficina,
        salario: req.body.salario,
    }

    await Provider.findByIdAndUpdate(id, {$set: provider}, {new: true})

    res.json({
        status: 'Empleado actializado'
    })
}





providersCtrl.deleteProvider = async (req, res) =>{
    await Provider.findByIdAndRemove(req.params.id)
    res.json({status: "Empleado eliminado"})
}



module.exports = providersCtrl