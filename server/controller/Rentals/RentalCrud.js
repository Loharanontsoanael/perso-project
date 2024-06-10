const { where } = require("sequelize");
const model = require("../../models");

const Rental = model.Rental

const getRental = (req,res)=>{
    Rental.findAll({
        include: [
            {
                model:User ,
                attributes : [id , UserName]
            },
            {
                model:Engine ,
                
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


module.exports={
    getRental,
}