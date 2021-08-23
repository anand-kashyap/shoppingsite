import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:5000';

const getCategories = () => axios.get('/categories');

export { getCategories };
