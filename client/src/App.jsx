import React, {useEffect, useState} from 'react'
import axios from 'axios'

function App() {

  let [stats, setStats] = useState({})

  useEffect(() => {
    getStats()
  })

  function getStats(){
    axios.get('http://localhost:5000/getStats')
    .then(function (response) {
      setStats(response.data.data);
    })
    .catch(function (error) {
     
      console.log(error);
    })
    .then(function () {
  
    });
  }
  

 

  return (
    <div>
     <h1>Crypto Fox</h1>
     <h3>Balance is: {stats?stats.balance:0}eth</h3>
    </div>
  );
}

export default App;
