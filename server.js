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


app.get('/getPrices', function (req, res) {

  const requestOptions = {
    method: 'GET',
    url: `${CRYPTO_PRICE_URL}`,
    qs: {
      'start': '1',
      'limit': '5000',
      'convert': 'USD'
    },
    headers: {
      'X-CMC_PRO_API_KEY': `${CRYPTO_PRICE_KEY}`
    },
    json: true,
    gzip: true
  };

  axios(requestOptions)
  .then(response => {
    console.log('API call response:', response.data);
  })
  .catch((err) => {
    console.log('API call error:', err.message);
  });


})

app.listen(Port,()=>{
    console.log(`App listen on ---> http://localhost:${Port}`)
})