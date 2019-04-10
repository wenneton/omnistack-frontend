import axios from 'axios';

const api = axios.create({
    baseURL: 'https://omnistack-backend-app.herokuapp.com',
});

export default api;