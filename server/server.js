const Express = require("express")
const http = require('http')
const cors = require('cors')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const session = require('express-session')
const db= require('./models')
// const socketio= require('socket.io')
const {Server} = require('socket.io')

const Parameter= {
    origin: 'http://localhost:5173',
    methods:["GET","POST","PUT","DELETE"],
    credentials: true ,
}

const app = Express()
const server = http.createServer(app)
const io = new Server(server , {
    cors:{
        origin:Parameter.origin ,
        methods:Parameter.methods,
        credentials:Parameter.credentials
    }
})

const attachSocket = (req, res, next) => {
    req.io = io;
    next();
};

app.use(cors(Parameter))
app.use(attachSocket);
app.use(bodyParser.json())
app.use(Express.json())
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



// io.on('connection', (socket) => {
//     console.log('A client connected');
//     // You can add more socket.io events handling here if needed
// });



db.sequelize.sync().then((req)=>{
    server.listen(8081 , ()=>{
        console.log("listening");
    })
})
