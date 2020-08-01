const {Schema, model} = require('mongoose');

const userSchema = new Schema({
    email: String,
    password: String
}, {
    timestamps: true
}); 

//Creamos el modelo
module.exports = model('User', userSchema);