const express = require('express')

const app = express();

const {infoCursos} = require('./datos/cursos')



//ROUTERS

const routerProgramacion = require('./programacion')
//const routerProgramacion = express.Router(); lo pase a programacion.js
app.use('/api/cursos/programacion', routerProgramacion)


const routerMatematicas = require('./matematicas')
//const routerMatematicas = express.Router(); lo pase a matematicas
app.use('/api/cursos/matematicas', routerMatematicas)

app.get('/', (req, res) => {
    res.send('MI PRIMER SERVIDOR')
})

app.get('/api/cursos', (req, res) => {
    res.send(infoCursos)
})


const PUERTO = process.env.PUERTO || 3001
app.listen(PUERTO, () => {
    console.log((`servidor con puerto ${PUERTO}`));
})