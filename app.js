const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
require('dotenv').config()


const moviesRoutes = require('./routes/moviesRoutes');
const usersRoutes = require('./routes/usersRoutes');
const vistaRoutes = require('./routes/vistaRoutes');
const likeRoutes = require('./routes/likeMovieRoutes');
const usersController = require('./controllers/usersController');

//middleware
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', moviesRoutes);
app.use('/api', usersRoutes);
app.use('/api', vistaRoutes);
app.use('/api', likeRoutes);

app.use(express.static(path.join(__dirname, 'public')));

//files estaticos (hay que cambiarlo pero cumple funcionalidad)
app.get('/', (req, res) => {res.sendFile(path.join(__dirname,'index.html'));});
app.get('/login', (req, res) => {res.sendFile(path.join(__dirname,'public','pages','login.html'));});
app.get('/perfil', (req, res) => {res.sendFile(path.join(__dirname,'public','pages','perfil.html'));});
app.get('/registrarse', (req, res) => {res.sendFile(path.join(__dirname,'public','pages','registrarse.html'));});
app.get('/addMovie', (req, res) => {res.sendFile(path.join(__dirname,'public','pages','user.html'));});

const PORT =  process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server running at ${PORT}/`);
});
