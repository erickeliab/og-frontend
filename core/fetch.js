import { server } from '../config'
const axios = require('axios');



export const fetchdata =  (entity) => {
    let ans;
    axios.get(`https://og-backend-m4e47.ondigitalocean.app/${entity}`)
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

 