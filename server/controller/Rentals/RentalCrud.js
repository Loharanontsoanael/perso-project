const { where } = require("sequelize");
const model = require("../../models");

const Rental = model.Rental
const User = model.User
const Engine = model.Engine

const getRental = (req,res)=>{
    Rental.findAll({
        include: [
            {
                model:User ,
                as:'user',
                attributes : ['id' , 'UserName']
            },
            {
                model:Engine ,
                as:'engine',
                attributes : ['id' , 'EngineName' , 'Price' , 'Quantity' ]
            }
        ]
    })
    .then((Rental)=>{
        res.send({Rental: Rental})
    })
    .catch((err)=>{
        res.send({message:'Error , some elements got an error .'})
    })
}


const newRental = (req,res)=>{

    const rb = req.body

    Rental.create({
        user_id : rb.user_id,
        engine_id: rb.engine_id,
        dateLimit: rb.dateLimit,
        choosen_quantity : rb.choosen_quantity,
        total_price:rb.total_price
    })
    .then((rentals)=>{
        req.io.emit('newRental' , rentals)
        res.send({Rental: rentals})
    })
    .catch((err)=>{
        res.send({message:'Error Occured during the action .'})
    })
}




module.exports={
    getRental,
    newRental,
}