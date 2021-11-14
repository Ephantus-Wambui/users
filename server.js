const express = require('express');
const app = express();

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/new-users', { useNewUrlParser: true, useUnifiedTopology: true });

const ejs = require('ejs');
app.set('view engine', 'ejs');
app.use(express.static('public'))

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const homepageController = require('./controllers/homepage')
const userController = require('./controllers/users')
const storeUserController = require('./controllers/storeUser')
const inputController = require('./controllers/input')
const storeInputController = require('./controllers/storeInput')
const eachUserController = require("./controllers/eachUser")
const updateUserController = require('./controllers/updateUser')
const updateController = require('./controllers/update')

app.get('/', homepageController)
app.get('/auth/register', userController)
app.post('/user/signup', storeUserController)
app.get('/input', inputController)
app.post('/register/input', storeInputController)
app.get('/user/:id', eachUserController)
app.get('/update/:id', updateUserController)
app.post('/update/user', updateController)

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
})
