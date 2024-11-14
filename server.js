const express = require('express')

const mongoose = require('mongoose')

const dotenv = require('dotenv').config()

const routes = require('./routes/index.js')

const Users = require('./models/User.js')

const Album = require('./models/Album.js')

const discosRouter = require('./routes/discos');

const usersRouter = require('./routes/users');


// const url = 'mongodb+srv://ezemel77:PipoMongo2024@clasemongo.b94tu.mongodb.net/?retryWrites=true&w=majority&appName=ClaseMongo'
const url = process.env.DATABASE_URL
const PORT = process.env.PORT

const app = express()

// ORGANIZADOR DE LA RUTA
app.use(express.json())
app.use(express.urlencoded({ extended: true}))

// REDIRIGIR A
const path = require("path")
app.use(express.static(path.join(__dirname, "./public")))

app.use('/', routes)

app.use('/users', usersRouter);

app.use('/discos', discosRouter);

connectToMongo = async () => {
    try{
        await mongoose.connect(url)
        app.listen(PORT, ()=> {
            console.log('Servidor escuchando en el puerto PORT y DB conectada')
        })
    }
    catch(error){
        console.log(error)
    }
}

connectToMongo()

// app.listen(5000, ()=> {
//     console.log('Servidor escuchando en el puerto 5000')
// })

