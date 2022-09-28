/**
 * La méthode 'express.Router()' permet de créer des routeurs
 * séparés pour
 * chaque route principale de l' application – on y enregistre
 * ensuite les routes individuelles.
 */

const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');

const postCtrl = require('../controllers/posts');

// On ajoute le middleware 'auth' en premier dans les routes :
// router.post('/', auth, multer, postCtrl.createSauce);
// router.put('/:id', auth, multer, postCtrl.modifySauce);
router.get('/', postCtrl.getAllPosts);
// router.get('/:id', auth, postCtrl.getOneSauce);
// router.delete('/:id', auth, postCtrl.deleteSauce);
// router.post('/:id/like', auth, multer, postCtrl.likeDislikeSauce);


// Rend router accessible aux autres fichiers :
module.exports = router;
