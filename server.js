const express = require('express')
const app = express()

const Port = 3000
 
app.get('/', function (req, res) {
  res.send('Hello World')
})


app.listen(Port,()=>{
    console.log(`App listen on ---> http://localhost:${Port}`)
})