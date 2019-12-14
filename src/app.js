const express = require("express")
const mongoose = require("mongoose")
const path = require("path")
const bodyParser = require('body-parser')

const app = express()

//conexão com o MongoDB local
mongoose.connect("mongodb://localhost:27017/reprograma", {
  useNewUrlParser:true, 
  useUnifiedTopology:true,
  useCreateIndex: true
});

let db = mongoose.connection;
db.on("error", console.log.bind(console, "Connection error:"))
db.once("open", function(){
  console.log("Conexão com MongoDB feita com sucesso.")
})

//rotas
const index = require("./routes/index")
const feedbacks = require("./routes/feedbacksRoute")
const usuarios = require('./routes/usuariosRoute')

app.use(express.json());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  )
  next()
})


app.use(express.static('doc'))
app.get('/api-doc', (req, res) => {
  res.sendFile( path.join(__dirname + '/../doc/index.html'));
})

app.use(bodyParser.json());

app.use("/", index)
app.use("/feedbacks", feedbacks)
app.use('/usuarios', usuarios)

module.exports = app