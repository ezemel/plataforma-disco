const mongoose = require('mongoose')

const Album = new mongoose.Schema({
    TituloAlbum: {type: String},
    Descripcion: {type: String},
    AnioVenta: {type: Date},
    Canciones: [{TítuloCancion: {type: String},
                Duración: {type: String}}],
    Portada: {type: String}
})

module.exports = mongoose.model('Album', Album)