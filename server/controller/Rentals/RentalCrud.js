const { where } = require("sequelize");
const model = require("../../models");
const { sequelize } = require('../../models');
const { newEngine } = require("../Engine/EngineCrud");

const Rental = model.Rental;
const User = model.User;
const Engine = model.Engine;

const getRental = (req, res) => {
  Rental.findAll({
    include: [
      {
        model: User,
        as: "user",
        attributes: ["id", "UserName"],
      },
      {
        model: Engine,
        as: "engine",
        attributes: ["id", "EngineName", "Price", "Quantity"],
      },
    ],
  })
    .then((Rental) => {
      res.send({ Rental: Rental });
    })
    .catch((err) => {
      res.send({ message: "Error , some elements got an error ." });
    });
};

const newRental = async(req, res) => {
  const rb = req.body;

  // const transaction = await sequelize.transaction()

  try {
    const engine = await Engine.findByPk(rb.engine_id)

    if (!engine) {
      throw new Error('Engine not found');
    }

    const newQuantity = engine.Quantity - rb.choosen_quantity;
    await engine.update({ Quantity: newQuantity });

    const rental =  Rental.create({
      user_id: rb.user_id,
      engine_id: rb.engine_id,
      dateLimit: rb.dateLimit,
      choosen_quantity: rb.choosen_quantity,
      total_price: rb.total_price,
    })

    req.io.emit("newRental", rental);
    req.io.emit('updatedEngine',engine)
    res.send({ Rental: rental });

  } catch (error) {
    res.send({ message: "Error Occurred during the action.", error: err.message });
  }

};



const editRental =async (req, res) => {
  const id = req.params.idRental;
  const {
    user_id,
    engine_id,
    dateLimit,
    choosen_quantity,
    total_price,
    status,
  } = req.body;

  try {

    const rental = await Rental.findByPk(id)

    if (!rental) {
      throw new Error('Rental not found');
    }

    if (status !== "Accept") {
      const engine = await Engine.findByPk(req.body.engine_id);
      if (!engine) {
        throw new Error('Engine not found');
      }
      const newQuantity = parseInt(engine.Quantity) + parseInt(req.body.choosen_quantity);
      await engine.update({ Quantity: newQuantity });
      await req.io.emit('updatedEngine',engine)
    }

    await rental.update(
      {
        user_id: user_id,
        engine_id: engine_id,
        dateLimit: dateLimit,
        choosen_quantity: choosen_quantity,
        total_price: total_price,
        status: status,
      },
    );

    const updatedRental = await Rental.findByPk(id,{
        include: [
            {
              model: User,
              as: "user",
              attributes: ["id", "UserName"],
            },
            {
              model: Engine,
              as: "engine",
              attributes: ["id", "EngineName", "Price", "Quantity"],
            },
          ],
    })
    if(updatedRental){
        req.io.emit("updateRental", {updatedRental})
        return res.json({ Message: "Element updated" });
    }else{
        return res.json({Message:'Inexistent element'})
    }
  } catch (error) {
    return res.json({Message:'Database error'})
  }
};


const isBack = async(req,res)=>{
  const id = req.params.id
  const values = true
  const status = 'Back'

  try {
    await Rental.update(
      { 
        isBack:values,
        status: status
      },
      {where: {id:id}},
    )
    const updatedRental = await Rental.findByPk(id,{
      include: [
          {
            model: User,
            as: "user",
            attributes: ["id", "UserName"],
          },
          {
            model: Engine,
            as: "engine",
            attributes: ["id", "EngineName", "Price", "Quantity"],
          },
        ],
    })
    if(updatedRental){
      req.io.emit("updateRental", ({id:id , updatedRental:updatedRental}))
      return res.json({ Message: "Element updated" });
    }else{
      return res.json({Message:'Inexistent element'})
    }
  } catch (error) {
    return res.json({Message:'Database error'})
  }

}

const reporting =async(req,res)=>{
  const id= req.params.id
  const reporting = true

  try {
    await Rental.update(
      { 
        reporting:reporting,
      },
      {where: {id:id}},
    )
    const updatedRental = await Rental.findByPk(id,{
      include: [
          {
            model: User,
            as: "user",
            attributes: ["id", "UserName"],
          },
          {
            model: Engine,
            as: "engine",
            attributes: ["id", "EngineName", "Price", "Quantity"],
          },
        ],
    })
    if(updatedRental){
      req.io.emit("updateRental", ({id:id , updatedRental:updatedRental}))
      return res.json({ Message: "Element updated" });
    }else{
      return res.json({Message:'Inexistent element'})
    }
  } catch (error) {
    return res.json({Message:'Database error'})
  }

}

const deleteRental = async(req,res)=>{
  const id = req.params.id
  await Rental.destroy({
    where:{
      id: id,
    }
  })
  .then((result)=>{
    req.io.emit('deletedRental',{id})
  })
  .catch((err)=>{
    res.json({Message:err})
  })
}

module.exports = {
  getRental,
  newRental,
  editRental,
  deleteRental,
  isBack,
  reporting,
};
