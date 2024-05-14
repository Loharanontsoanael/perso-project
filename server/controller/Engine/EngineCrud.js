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
        req.io.emit('newEngine' , result)
        return res.json({Message:"Success"})
    })
    .catch((error)=>{
        console.log(error);
        return res.json({Message: 'Error'})
    })
}


const getEngine = (req,res)=>{
    Engine.findAll()
    .then((engine)=>{
        res.send({engine:engine})
    })
    .catch((error)=>{
        res.send({message:"Error"})
    })
}


const editEngine = ()=>{

}


const deleteEngine = ()=>{

}

module.exports={
    newEngine,
    getEngine,
    editEngine,
    deleteEngine
}
