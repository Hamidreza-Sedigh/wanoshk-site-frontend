import axios from 'axios';

import conf  from './../conf.json'; // Relative path to your File

// fs = require('fs'),

//var conf = JSON.parse(fs.readFileSync('ktadealer.conf'));

let environment = 'dev' //dev or opr
let envURL = '';

if(conf.environment == 'opr'){
    envURL= 'http://194.36.174.161:8000'
} else {
    envURL= 'http://localhost:8000'
}

console.log("conf:", conf.environment);
console.log("env:", environment, "||", envURL);

const api = axios.create({
    baseURL: envURL
})

//const api = axios.create({baseURL: 'http://194.36.174.161:8000'})

export default api;
//api.get()
//api.post()