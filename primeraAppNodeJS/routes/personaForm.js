let express = require('express');
let router = express.Router();

let mongoose = require('./../config/conexion');
let Persona = require('./../models/persona');

router.get('/buscarDescripcion', (req, res, next) => {
    console.log("BUSCAR DEL PERSONAFORM");
    let nombreUrl = req.params.nombre;
    let apellidoUrl = req.params.apellido;
    
    let per = new persona({
      nombres: nombreUrl,
      apellidos: apellidoUrl
    });
    per.save();
    res.render('personaForm',{ persona: per });
  });

module.exports = router;