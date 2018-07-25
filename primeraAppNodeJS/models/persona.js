let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let personaSchema = new Schema({
    id: { type: String, default: 'vacio' },
    nombres: { type: String, default: 'vacio'},
    apellidos: { type: String, default: 'vacio'},
    descripcion: { type: String, default: 'Sos alto trolo come hombres!!!'}
  },{ versionKey:false});

let persona = mongoose.model('Personas',personaSchema);

module.exports = persona;