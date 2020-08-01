const express = require('express');
const app = express();
const cors = require('cors');

require('./database');

//Agrega cors
app.use(cors());

//Convierte los datos en un json que la app pueda entender
app.use(express.json());

//Todas las rutas inician con /api 
app.use('/api',require('./routes/index'));

app.listen(3000);
console.log('Server on port', 3000);
