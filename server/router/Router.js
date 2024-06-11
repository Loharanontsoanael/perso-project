const express = require('express')
// const AuthController = require('../controller/Authentification/Authentification.js')
const {AuthController , EngineController, RentalController}=require('../controller/controllerModule')

const router = express.Router();

//Authentifications
router.post('/log', AuthController.log)
router.post('/reg' , AuthController.reg)
router.post('/logout',AuthController.logout)
router.get('/logCookie' , AuthController.logCookie)


//Engine
router.post('/NewEngine' , EngineController.newEngine)
router.get('/getEngine' , EngineController.getEngine)
router.delete('/deleteEngine/:id' , EngineController.deleteEngine)
router.put('/editEngine/:idEngine' , EngineController.editEngine)



//Rentals
router.get('/getRental', RentalController.getRental)
router.post('/newRental', RentalController.newRental)
router.put('/editRental/:idRental',RentalController.editRental)
// router.post()
module.exports = router ;
