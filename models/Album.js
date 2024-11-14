const mongoose = require('mongoose')

const Album = new mongoose.Schema({
    TítuloAlbum: {type: String},
    Descripción: {type: String},
    AñoVenta: {type: Date},
    Canciones: [{TítuloCancion: {type: String},
                Duración: {type: String}}],
    Portada: {type: String}
})

module.exports = mongoose.model('Album', Album)