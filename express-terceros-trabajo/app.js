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

import express from 'express'
import { data } from './database.js'
const items = data.items;
const PORT = 3245;
const app = express()

app.get('/api/character/', (req, res) => {
  res.status(200).json(items);
})

app.get('/api/character/:id', (req, res) => {
    const {id} = req.params; 
    const personajes = items.find((personaje)=> personaje.id === parseInt(id))
    if (!personajes){
        return res.status(404).json({error: 'Personaje de la API no encontrado'})
    }

    console.log(`Personaje de ${personajes.name} con ID ${id}`)

    res.status(200).json(personajes);

});

app.listen(PORT, () => {
    console.log(`El servidor esta corriendo perfectamente en: http://localhost:${PORT}`);

});