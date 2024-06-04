
const model = require('../../models')

const bcrypt = require('bcrypt')
const saltRounds =10


const User = model.User

const log = (req,res)=>{
    const username = req.body.UserName
    const password = req.body.PassWord

    User.findOne({where : {UserName:username}})
    .then((users)=>{
        if(users){
            bcrypt.compare(password , users.PassWord , (error , response)=>{
                if(response){
                    req.session.user = {id:users.id , username:users.UserName}
                    // console.log({message : req.session.user});
                    res.send(users)
                }else{
                    res.send({Message:"Wrong Combination ... Go learn some hacking , u got skill issues!!!!"})
                }
            })
        }else{
            res.send({Message:"No Such User Dumbass!!!!"})
        }
    })
    .catch((err)=>{
        res.send(err)
    })
}

const reg = (req,res)=>{
    const username = req.body.UserName
    const password = req.body.PassWord
    bcrypt.hash(password ,saltRounds, (err , hashed)=>{
        if(err){
            res.send({Message:err})
        }
        User.create({
            UserName:username ,
            PassWord:hashed
        })
        .then((users)=>{
            req.session.user = {id:users.id , username:users.UserName}
            res.send(users)
        }).catch(err=>{
            res.send({Message : err})
        })
    })
}


const logCookie = (req,res)=>{
    if(req.session.user){
        res.send({LogStatus: true , id:req.session.id ,  user: req.session.user})
    }else{
        res.send({LogStatus: false})
    }
}


const logout = (req,res)=>{
    req.session.destroy((err)=>{
        if(err){
            res.send(err)
        }
        res.clearCookie('cookieUser')
        res.send({Message:"Logged Out Successfully"})
    })
}



module.exports={
    log,
    reg,
    logCookie,
    logout
}