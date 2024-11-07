const mongoose = require('mongoose')

const User = new mongoose.Schema({
    Nombre: {type: String} ,
    Apellido: {type: String},
    Email: {type: String},
    Contraseña: {type: Number},
    Favoritos: {type: Boolean}
})

module.exports = mongoose.model('User', User)