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
router.get('/discos/', async (req, res) => {
    try {
      const result = await Discos.find()
  
      res.status(200).send(result)
      //res.json(Discos);
    } catch (error) {
      res.status(404).send("No data")
    }
  })

//GET  ---> TRAER UN SOLO disco
// router.get("/título/:TítuloAlbum", async(req, res) => {
//     //la-noche-estrellada
//     console.log('PARAMS', req.params) 
//     try {
//       const disco = await Discos.find({ TítuloAlbum: req.params.TítuloAlbum })
  
//       if (disco.length) {
//         res.status(200).send(disco)
//       } else {
//         res.status(404).send('No existe disco')
//       }
//       //res.status(200).send(discos)
//     } catch (error) {
//       res.status(500).send('Algo anda mal')
//     }
//   })

  // router.get("/discos/:TítuloAlbum", async (req, res) => {
  //   //la-noche-estrellada
  //   console.log('PARAMS', req.params)
  //   try {
  //     const result = await Discos.find(req.params.TítuloAlbum)
  //     res.status(200).send(result)
  //   } catch (error) {
  //     res.status(404).send("No data")
  //   }
  // })
  
  // Ruta para consultar un álbum por ID
    router.get("/discos/:TituloAlbum", async (req, res) => {
      console.log('PARAMS', req.params)
      
      try {
        //const discos = await Discos.findById(req.params.id);
        const discos = await Discos.find(req.params);
        //const disco = await Discos.findOne({ TituloAlbum: tituloAlbum });
        // if (!discos) {
        //   return res.status(404).send("Álbum no encontrado.");
        // }
        res.status(200).send(discos);
        //res.status(200).send({Portada: disco.Portada});
        console.log('Portada', res.params.Portada)
      } catch (error) {
        res.status(500).send(error);
      }

      //console.log('PARAMS', res.Portada)

    });




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
  