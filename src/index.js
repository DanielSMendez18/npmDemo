const axios = require('axios');

const saludar = (name) => {
    let resp = 'Hello '+ name; 
    return resp;
}

const users = async () => {
    
    const res = await axios.get('https://jsonplaceholder.typicode.com/users?_limit=2')
    return res.data;

}

//users().then(res => console.log(res));

module.exports ={
    saludar,
    users
}