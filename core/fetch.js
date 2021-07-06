import { server } from '../config'
const axios = require('axios');



export const fetchdata =  (entity) => {
    let ans;
    axios.get(`http://localhost:1337/${entity}`)
    .then(function (response) {
        console.log('response');
        console.log(response);

        ans = response
    })
    .catch(function (error) {
      
        console.log(error);
    })
    .then(function () {
      
    });

    return ans;
  }

  export const fetchsingle = async (entity,id) => {
    const res = await fetch(`${server}/api/${entity}/id`)
  
    const entit = await res.json()
  
    return entit
  }

 