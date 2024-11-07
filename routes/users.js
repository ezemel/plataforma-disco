const express = require('express');
const Users = require('../models/User.js')
const router = express.Router();



//CREATE

router.post('/users', async (req, res)=>{
  try {
    await Users.create(req.body)
    res.status(201).send("Usuario agregado correctamente")
  } catch (error) {
    console.log(error)
    res.status(500).send("Error al crear el usuario")
  }
})

// // USER
// router.post('/users', async (req, res) => {
//   try {
//     console.log(req.body)
//     const Users = new Users(req.body);
//     await Users.save();
//     res.status(201).json(Users);
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// });

// GET ALL ---> TRAER TODOS LOS usuarios
router.get('/users', async(req, res) => {
  // Lógica para obtener todos los usuarios
  //console.log('users')
  try {
    const users =await Users.find()
    if (users.length) {
      res.status(200).send(users)
    } else {
      res.status(404).send('No hay usuarios')
    }
  } catch (error) {
    res.status(500).send('Algo anda mal')
  }
});


// GET  ---> TRAER UN SOLO usuario
router.get('/users/:Nombre', async(req, res) => {
  // Lógica para obtener todos los usuarios
  console.log('PARAMS', req.params)
  try {
    const users = await Users.find({Nombre:req.params.Nombre})
    if (users.length) {
      res.status(200).send(users)
    } else {
      res.status(404).send('No existe usuario')
      
    }
  } catch (error) {
    res.status(500).send('Algo anda mal')
  }
})

// BORRAR USUARIO
router.delete('/users/:Nombre', async(req,res)=>{
  try {
    const users = await Users.findOneAndDelete({Nombre:req.params.Nombre})
    if (users.length) {
      res.status(200).send(users)
    } else {
      res.status(404).send('No existe usuario')
    }
  } catch (error) {
    
  }
})

  module.exports = router;