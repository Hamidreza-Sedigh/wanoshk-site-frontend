import axios from 'axios';

const api = axios.create({
    baseURL: 'http://194.36.174.135:8000'
})

export default api;

//api.get()
//api.post()