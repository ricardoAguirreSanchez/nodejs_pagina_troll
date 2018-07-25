//Para la config de la conexion a la BD
var mongoose = require('mongoose');
 
//mongoose.connect('mongodb://localhost:27017/test');
mongoose.connect('mongodb://rick:123@ds115768.mlab.com:15768/persona');


module.export = mongoose;