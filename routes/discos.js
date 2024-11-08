const express = require('express')
const Discos = require('../models/Album.js')
//UNA INSTANCIA PARA MANEJAR RUTAS
const router = express.Router()

// CREATE
// titulo, fechaDeLanzamiento, precio, canciones
router.post('/discos/', async (req, res)=>{
    try {
      await Discos.create(req.body)
      res.status(201).send("Disco agregado correctamente")
    } catch (error) {
      console.log(error)
      res.status(500).send("Error al crear el disco")
    }
})

// GET ALL ---> TRAER TODOS LOS DISCOS
router.get('/discos/', async (req, res)=>{
    try {
      const result = await Discos.find({})
  
      res.status(200).send(result)
    } catch (error) {
      res.status(404).send("No data")
    }
  })

//GET x NOMBRE

router.get('/discos/:TítuloAlbum', async(req, res) => {
    //la-noche-estrellada
    console.log('PARAMS', req.params)
    try {
      const discos = await Discos.find({TítuloAlbum:req.params.TítuloAlbum})
      if (discos.length) {
        res.status(200).send(discos)
      } else {
        res.status(404).send('No existe usuario')
        
      }
      //res.status(200).send(result)
    } catch (error) {
      res.status(500).send("No data")
    }
  })
  
  //UPDATE
  
  router.put('/discos/:id', async (req, res)=>{
    try {
        const id = req.params.id
        const newInfo = req.body
  
        console.log("NEW INFO", newInfo)
  
        const arr = [ { nombreDeCancion: 'Cancion 1 del album', duracion: 4 } ]
  
        await Discos.findByIdAndUpdate(id, {canciones: arr}, {new: true})
  
      res.status(200).send("Elemento actualizado correctamente")
    } catch (error) {
      console.log(error)
      res.status(500).send("Hubo un error en la actualizacion")
    }
  })
  
  
  router.delete('/discos/:id', async (req, res)=>{
    try {
        const id = req.params.id
        await Discos.findByIdAndDelete(id)
  
      res.status(200).send("Elemento eliminado correctamente")
    } catch (error) {
      console.log(error)
      res.status(500).send("Hubo un error en la eliminacion")
    }
  })
  
  
  module.exports = router
  