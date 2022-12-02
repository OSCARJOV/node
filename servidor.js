const express =require('express');

const app = express();

const {infoCursos} = require('./cursos') 

app.get('/', (req,res) =>{
res.send(infoCursos)
    
})

const PUERTO = process.env.PUERTO || 3000
app.listen(PUERTO, () => {
    
   console.log(`Mi primer servidor por el PUERTO ${PUERTO}`)
})