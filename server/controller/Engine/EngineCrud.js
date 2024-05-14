const model = require('../../models')

const Engine = model.ProductTest


const newEngine = (req,res)=>{
    const name = req.body.name
    const price = req.body.price
    const quantity = req.body.quantity

    Engine.create(
        {
            EngineName:name,
            Price:price ,
            Quantity:quantity,
        }
    )
    .then((result)=>{
        console.log("bien");
        return res.json({Message:"Success"})
    })
    .catch((error)=>{
        console.log("err");
        return res.json({Message: "error"})
    })
}


module.exports={
    newEngine
}
