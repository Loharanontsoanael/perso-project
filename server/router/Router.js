const express = require('express')
// const AuthController = require('../controller/Authentification/Authentification.js')
const {AuthController , EngineController}=require('../controller/controllerModule')

const router = express.Router();

//Authentifications
router.post('/log', AuthController.log)
router.post('/reg' , AuthController.reg)
router.post('/logout',AuthController.logout)
router.get('/logCookie' , AuthController.logCookie)


//Engine
router.post('/NewEngine' , EngineController.newEngine)
router.get('/getEngine' , EngineController.getEngine)

module.exports = router ;
