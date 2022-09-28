// Import du framework express pour construire l'application :
const express = require('express');

// import des routes pour être utilisées par l'application :
const userRoutes = require('./routes/user');
const postRoutes = require('./routes/posts');

// path pour accéder au serveur :
const path = require('path');

// création de l'application express :
const app = express();

// variables d'environnement avec dotenv ne pas révéler les infos confidentielles :
const dotenv = require('dotenv');
dotenv.config();

// helmet permet de sécuriser l'application avec différents headers :
const helmet = require('helmet');
app.use(helmet());

/* Permet d'avoir accès au corps de la requête. Il intercepte toutes les requêtes qui ont un content-type 'json' et met à disposition ce contenu sur l'objet req.body */
app.use(express.json());

/*_______________ CROSS ORIGIN RESSOURCES SHARING __________________
1er middleware qui gère le CORS avec les headers et sera appliqué à toutes les requêtes (donc pas de route en paramètre) */
app.use((req, res, next) => {
	res.setHeader('Access-Control-Allow-Origin', '*');
	// ajout header avec helmet :
	res.setHeader('Cross-Origin-Resource-Policy', 'same-site');
	res.setHeader(
		'Access-Control-Allow-Headers',
		'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization'
	);
	res.setHeader(
		'Access-Control-Allow-Methods',
		'GET, POST, PUT, DELETE, PATCH, OPTIONS'
	);
	next();
});
/*_________________________________________________________ */

// on passe les URI et routes dans l'applications :
app.use('/api/auth', userRoutes);
app.use('/api/posts', postRoutes);
app.use('/images', express.static(path.join(__dirname, '/images')));

// Enfin, on exporte l'application app.js pour la rendre accessible aux autres fichiers
module.exports = app;
