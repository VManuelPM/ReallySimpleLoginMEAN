const { Router, json } = require('express');
const router = Router();

//Importamos el modelo
const User = require('../models/User');

const jwt = require('jsonwebtoken');

router.get('/', (req, res) => { res.send('Hi world') });

router.post('/signup', async (req, res) => {
    const { email, password } = req.body;
    const newUser = new User({ email, password })
    // Con await le decimos que lo que viene
    // es un metodo asincrono
    // Es decir le decimos que puedo ir haciendo otras cosas en el server
    await newUser.save();

    //Creamos un token
    const token = jwt.sign({ id: newUser._id }, 'secretKey');
    res.status(200).json({ token });
});

router.post('/signin', async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.status(401).send('The email doesnt exists');
    if (user.password !== password) return res.status(401).send('Wrong Password');
    const token = jwt.sign({ id: user._id }, 'secretKey');
    return res.status(200).json({ token });
});

router.get('/products', (req, res) => {
    res.json([
        {
            _id: 1,
            name: 'Product 1',
            description: 'lorem Ipsum',
            date: '2020-11-21T01:20:10.2llZ'
        },
        {
            _id: 2,
            name: 'Product 2',
            description: 'lorem Ipsum',
            date: '2020-11-21T01:20:10.2llZ'
        },
        {
            _id: 3,
            name: 'Product 3',
            description: 'lorem Ipsum',
            date: '2020-11-21T01:20:10.2llZ'
        }
    ])
});

//Ruta privada
router.get('/privateProducts', verifyToken, (req, res) => {
    res.json([
        {
            _id: 1,
            name: 'Private Product 1',
            description: 'lorem Ipsum',
            date: '2020-11-21T01:20:10.2llZ'
        },
        {
            _id: 2,
            name: 'Private Product 2',
            description: 'lorem Ipsum',
            date: '2020-11-21T01:20:10.2llZ'
        },
        {
            _id: 3,
            name: 'Private Product 3',
            description: 'lorem Ipsum',
            date: '2020-11-21T01:20:10.2llZ'
        }
    ])
});


module.exports = router;

//Función que verifica el token
function verifyToken(req, res, next) {
    
    if (!req.headers.authorization) {
        return res.status(401).send('unauthorize request');
    }

    const token = req.headers.authorization.split(' ')[1];
    console.log(token);
    if(token == null){
      return res.status(401).send('unauthorize request')
    }

    const payload = jwt.verify(token, 'secretKey');
    req.userId = payload._id;
    next();
}