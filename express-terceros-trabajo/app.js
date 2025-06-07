// import express from "express";
// import { data } from "./database.js";

// const app = express();
// const PORT = 3004;

// app.get("/api/characters", (req, res) => {
//   res.status(200).json(data);
// });

// app.get("/api/characters/:id", (req, res) => {
//   const { id } = req.params;
// });

// app.use((req, res) => {
//   res.status(404).json({
//     status: 404,
//     message: "Not Found",
//   });
// });

// app.listen(PORT, () => {
//   console.log(`Servidor corriendo en http://localhost:${PORT}`);
// });
// Importaciones para el codigo
import express from 'express'
import { data } from './database.js'

// Constantes para usar 
const items = data.items;
const PORT = 3245;
const app = express()



app.get('/api/character/', (req, res) => {
    console.log('Se están obteniendo los personajes de DragonBall.');
    // agregado de setHeader 
    res.setHeader('Content-type','application/json');
  res.status(200).json(items);
  res.json({ items });
});

app.get('/api/character/:id', (req, res) => {
    const {id} = req.params; 
    // podria ser también const id = req.params.id; 

    const personajes = items.find((personaje)=> personaje.id === parseInt(id))
    if (!personajes){
        return res.status(400).json({error: 'Personaje de la API no encontrado'})
    } else if (isNaN(parseInt(personajes.id))){
        return res.status(400).json({
            message: 'parametro invalido ID no es un número.',
            error: 400,
        });
    }
    for (let i = 0; i < items.length; i++) {
        if (items[i].id === parseInt(id)) {
            res.setHeader('Content-type', 'application/json');
            return res.json(items[i]);

        }
    }

    return res.status(404).json({
        error: 404,
        message: 'No se encuentra la URL.',
    });

    app.use((req, res)=>{
        return res.status(404).json({
            error: 404,
            message: 'No se encuentra la URL',
        });
    })

    // console.log(`Personaje de ${personajes.name} con ID ${id}`)

    res.status(200).json(personajes);

});

app.listen(PORT, () => {
    console.log(`El servidor esta corriendo perfectamente en: http://localhost:${PORT}`);

});

// http://localhost:3245/api/character/