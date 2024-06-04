const { where } = require("sequelize");
const model = require("../../models");

const Engine = model.ProductTest;

const newEngine = (req, res) => {
  const name = req.body.name;
  const price = req.body.price;
  const quantity = req.body.quantity;

  Engine.create({
    EngineName: name,
    Price: price,
    Quantity: quantity,
  })
    .then((result) => {
      req.io.emit("newEngine", result);
      return res.json({ Message: "Success" });
    })
    .catch((error) => {
      console.log(error);
      return res.json({ Message: "Error" });
    });
};

const getEngine = (req, res) => {
  Engine.findAll()
    .then((engine) => {
      res.send({ engine: engine });
    })
    .catch((error) => {
      res.send({ message: "Error" });
    });
};

const editEngine = (req, res) => {
  const id = req.params.idEngine;
  const { name, price, quantity } = req.body;
  Engine.update(
    { EngineName: name, Price: price, Quantity: quantity },
    { where: { id: id } }
  )
    .then((result) => {
      req.io.emit("updatedEngine", result);
      return res.json({ Message: "Success" });
    })
    .catch((err) => {
      return res.json({ Message: "Error" });
    });
};

const deleteEngine = (req, res) => {
  const id = req.params.id;
  Engine.destroy({
    where: { id: id },
  })
    .then((deleted) => {
      req.io.emit("updatedEngine", id);
      res.send({ message: "Item Deleted Successfully" });
    })
    .catch((err) => {
      res.send({ message: "Action error" });
    });
};

module.exports = {
  newEngine,
  getEngine,
  editEngine,
  deleteEngine,
};
