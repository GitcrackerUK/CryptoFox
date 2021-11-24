const express = require('express')
const axios = require('axios').default;
const app = express()
const cors = require('cors')

const Port = 5000
app.use(cors())

app.get('/', function (req, res) {
  res.send('CryptoFox')
})
app.get('/getStats', function (req, res) {

  axios.get(`${POOL_URL}${WALLET_ADDRESS}?coin=${COIN}`)
  .then(function (response) {

    res.send(response.data) 
  })
  .catch(function (error) {
    // console.log(error.response);
  })

})


app.listen(Port,()=>{
    console.log(`App listen on ---> http://localhost:${Port}`)
})