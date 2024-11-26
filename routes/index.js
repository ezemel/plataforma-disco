const express = require('express')
const router = express.Router()
//------------------------------------------
//const Discos = require('../models/Album.js')
const discos = require('./discos.js')
const users = require('./users.js')

//router.use 
router.use('/discos', discos)
router.use('/users', users)

//------------------------------------------
// router.get('/',(req, res)=>{
//     res.status(200).send('Hello World!')
// })

// router.get('/chau',(req, res)=>{
//     res.status(200).send('chau chau')
// })

// router.get('/prueba',(req, res)=>{
//     res.status(200).send({nombre: 'Juan', apellido: 'Perez'})
// })

// router.get('/models/Users',(req, res)=>{
//     res.status(200).send({nombre: 'Juan', apellido: 'Perez'})
// })

// router.get('/nuevoUsuario',(req, res)=>{
//     res.status(200).send('nuevoUsuario')
// })

module.exports = router
