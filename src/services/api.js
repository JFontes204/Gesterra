import axios  from 'axios';
const url = 'http://192.168.43.71/dhulka';
//const url = 'http://gesterradhulka.ao';
const api = axios.create({//
   baseURL: `${url}/api`
});

module.exports = { api, url };