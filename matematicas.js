const express = require('express')
const {matematicas} =require('./datos/cursos').infoCursos

const routerMatematicas = express.Router();

routerMatematicas.get('/', (req, res) =>{
    res.send(matematicas)
})

routerMatematicas.get('/:tema', (req, res) =>{
    
    const tema = req.params.tema
    resultado = matematicas.filter(cursos => cursos.tema = tema)

    if( resultado === 0) {
        res.send('No se encontro ese tema')
    }
    res.send(resultado)
})




module.exports = routerMatematicas