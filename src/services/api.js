import axios from 'axios';
let environment = 'env' //dev or opr
let envURL = '';

if(environment == 'opr'){
    envURL= 'http://194.36.174.135:8000'
} else {
    envURL= 'http://localhost:8000'
}

const api = axios.create({
    baseURL: envURL
})

//const api = axios.create({baseURL: 'http://194.36.174.135:8000'})

export default api;

//api.get()
//api.post()