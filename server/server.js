const Express = require("express")
const Cors = require('cors')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const session = require('express-session')

const db= require('./models')
const app = Express()

const {LoginTest , ProductTest} = require('./models')
const { Server } = require("socket.io")

const Parameter= {
    origin: 'http://localhost:5173',
    methods:["GET","POST","PUT","DELETE"],
    credentials: true ,
}

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


//  Actoion Backend
const router = require('./router/Router.js')
app.use('/',router)



db.sequelize.sync().then((req)=>{
    app.listen(8081 , ()=>{
        console.log("listening");
    })
})
