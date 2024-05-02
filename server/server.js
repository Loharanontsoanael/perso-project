const Express = require("express")
const Cors = require('cors')
const db= require('./models')
const app = Express()
const {LoginTest} = require('./models')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const session = require('express-session')
const { Server } = require("socket.io")

const Parameter= {
    origin: 'http://localhost:5173',
    methods:["GET","POST","PUT","DELETE"],
    credentials: true ,

}

const bcrypt = require('bcrypt')
const { where } = require("sequelize")
const saltRounds =10

app.use(Express.json())
app.use(Cors(Parameter))
app.use(cookieParser())
app.use(bodyParser.urlencoded({extended: true}))
app.use(session({
    key: "cookieUser",
    secret: "renesmeeBaby",
    resave: false,
    saveUninitialized: false ,
    cookie:{
        expires: 60*60*24,
    }
}))





app.post('/log' , (req , res)=>{
    const username = req.body.UserName
    const password = req.body.PassWord

    LoginTest.findOne({where : {UserName:username}})
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
})


app.post('/reg' , (req,res)=>{
    const username = req.body.UserName
    const password = req.body.PassWord
    bcrypt.hash(password ,saltRounds, (err , hashed)=>{
        if(err){
            res.send({Messahe:{err}})
        }
        LoginTest.create({
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
})

app.get('/logCookie' , (req,res)=>{
    if(req.session.user){
        res.send({LogStatus: true , user: req.session.user})
    }else{
        res.send({LogStatus: false})
    }
})


app.post('/logout' , (req,res)=>{
    req.session.destroy((err)=>{
        if(err){
            res.send(err)
        }
        res.clearCookie('cookieUser')
        res.send({Message:"Logged Out Successfully"})
    })
})


db.sequelize.sync().then((req)=>{
    app.listen(8081 , ()=>{
        console.log("listening");
    })
})
