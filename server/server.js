const Express = require("express")
const Cors = require('cors')

const app = Express()

const OriginPoint= {
    origin: 'http://localhost:5173/'
}

app.use(Cors(OriginPoint))

app.listen(8081 , ()=>{
    console.log("listening");
})
