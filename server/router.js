const express = require("express");
const userController = require("./controllers/userController");
const cardController = require('./controllers/cardController') ;
const cookieController = require('./controllers/cookieController') ;
const router = express.Router();

router.post('/signup', userController.createUser, (req,res) => (
    res.status(201).json({ message: 'User created successfully', user: res.locals.newUser })
));
router.post('/login', userController.verifyUser,cookieController.setCookie,userController.getDeck, (req,res) => (
    res.status(200).json({ message: 'User Login successfully'})
));
router.patch('/forgetPW', userController.updatePW, (req,res) => (
    res.status(200).json({ message: 'User Login successfully'})
));

router.post('/home/deck', cookieController.verifyCookie,userController.postDeck,(req,res) => (
    res.sendStatus(200))
);
router.get('/home/deck', userController.getDeck,(req,res) => (
    res.sendStatus(200))
);

router.post('/home/deck/card', cardController.postCard,(req,res) => (
    res.sendStatus(200))
);
router.get('/home/deck/card', cardController.getCard,(req,res) => (
    res.sendStatus(200))
);
module.exports = router;