const express = require('express')
const axios = require('axios').default;
const app = express()
const cors = require('cors')

const Port = 3000
 
app.get('/', function (req, res) {
  res.send('Hello World')
})


app.listen(Port,()=>{
    console.log(`App listen on ---> http://localhost:${Port}`)
})