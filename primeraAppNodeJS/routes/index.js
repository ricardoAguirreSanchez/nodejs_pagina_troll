let express = require('express');
let router = express.Router();

let mongoose = require('./../config/conexion');
let persona = require('./../models/persona');

/* GET home page. */
router.get('/', (req, res, next) => {
  console.log("Se redirecciona a la vista index");
  res.render('index',{});
});


router.post('/buscar', (req, res, next) => {
  if (!(req.body.nombres == "") && !(req.body.apellidos == "")) {
    let per = new persona({
      nombres: req.body.nombres,
      apellidos: req.body.apellidos
    });
    //Busca si existe la persona
    persona.findOne({nombres: per.nombres , apellidos: per.apellidos}, (err, personaEncontrada) => {
      if (err) console.log("Error al buscar la persona");
      if (personaEncontrada == null){
        console.log("No se encuentra la persona, se guarda...");
        per.save();
        console.log("Peticion POST: Revisar nombre y apellido");
        res.render('personaForm',{ persona: per});
      }else{
        if (personaEncontrada.id == "1"){
          console.log("es el capo");
          res.render('index',{});
          console.log("Peticion POST: Revisar nombre y apellido");
        }
      }
      
    });
  }
});


router.get('/:nombres/:apellidos', (req, res, next) => {
  if (!(req.params.nombres == "") && !(req.params.apellidos == "")) {
    let per = new persona({
      nombres: req.params.nombres,
      apellidos: req.params.apellidos
    });
    //Busca si existe la persona y lo manda al personaForm (vista)
    persona.findOne({nombres: per.nombres , apellidos: per.apellidos}, (err, personaEncontrada) => {
      if (err) console.log("Error al buscar la persona");
      if (personaEncontrada == null){
        console.log("No se encuentra la persona, se guarda...");
        per.save();
        res.render('personaForm',{ persona: per});
      }else{
        if (personaEncontrada.id == "1"){
          console.log("es el capo");
          res.render('index',{});
        }
      }
      
    });
    
  }
  
});

router.get('*', (req, res, next) => {
  console.log("Pagina error");
  res.send("Pagina no encontrada papá!!.");
});

module.exports = router;
