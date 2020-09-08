const express = require('express');
const app = express();
const heroes = require('./heroes.json');


app.listen(3030,()=>{
    console.log('Server running on port 3030');
})

app.get('/',(req,res) => {
    res.send(`
    Ni Superman, Iron Man o La Mujer Maravilla son tan importantes como
     las y los Héroes de carne y hueso que encontrarás en este sitio. Esperamos que ellas y
      ellos te sirvan como inspiración para poder cumplir tus objetvios. Recuerda: ¡Nunca pares de creer
      en tí!`);
});

app.get('/heroes',(req,res) => {
    res.send(heroes);
});
