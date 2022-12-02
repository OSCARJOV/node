const express = require('express')
 
const {programacion} = require('./datos/cursos').infoCursos

const routerProgramacion = express.Router();

routerProgramacion.use(express.json())

routerProgramacion.get('/', (req, res) =>{
    res.send(programacion)
})


routerProgramacion.get('/:lenguaje', (req, res) => {
    
    const lenguaje = req.params.lenguaje;
    const resultado = programacion.filter(cursos => cursos.lenguaje = lenguaje)

    if(resultado.length === 0){
      return res.send(`No existe un curso de ${lenguaje}`)
    }

    //console.log(req.query.ordenar);
    if(req.query.ordenar === 'visitas'){
      return  res.send(resultado.sort((a,b) => b.visitas - a.visitas))
    }
    res.send(resultado)
})

routerProgramacion.get('/:lenguaje/:nivel', (req, res) => {
    const lenguaje = req.params.lenguaje;
    const nivel = req.params.nivel;

    const resultado = programacion.filter(cursos => cursos.lenguaje === lenguaje && cursos.nivel === nivel);

    if(resultado.length === 0) {
       return res.send(`No se encontro el lenguaj ${lenguaje} del nivel ${nivel}`)
    }

    if(req.query.ordenar === 'vistas') {
        return res.send(resultado.sort((a,b) => b.vistas - a.vistas))

    }

    res.send(resultado)


    })


    routerProgramacion.post('/', (req, res) => {
        let bodyNew = req.body
        programacion.push(bodyNew)
        res.send(JSON.stringify(programacion))
    })
    

    routerProgramacion.put('/:id', (req,res) => {
      const body = req.body
      const id = req.params.id
      const indice = programacion.findIndex(curso => curso.id == id)

      if(indice >= 0){
        programacion[indice] = body;
      }

      res.send(programacion)

    })

    routerProgramacion.patch('/:id', (req, res) => {
        const body = req.body
        const id = req.params.id
        const indice = programacion.findIndex(curso => curso.id == id)

        if(indice >= 0){
            const cursoModificar = programacion[indice]
            Object.assign(cursoModificar, body)
        }

        res.send(programacion)
    })


    routerProgramacion.delete('/:id', (req, res) => {
        const id = req.params.id
        const indice = programacion.findIndex(cursos => cursos.id == id)

        if(indice >= 0) {
          programacion.splice(indice , 1)
            
        }
        res.send(programacion)
    })


module.exports = routerProgramacion