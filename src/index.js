const express = require('express')
const morgan = require('morgan')
const app = express()

const {mongoose} = require('./database')


//Setting
//Le decimos a la app que se congigure para usar el puerto proporcionado por el sistema operativo
app.set('port', process.env.PORT || 3000)


//Middlewares
app.use(express.json());
app.use(morgan('dev'))


//Routes
app.use('/api/rest/providers', require('./routes/routerproviders'))


//Starting the server
app.listen(app.get('port'), ()=>{
    console.log(`server started at port ${app.get('port')}`);
});

