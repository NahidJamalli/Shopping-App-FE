import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:5001',  // Update this with your backend's URL
  headers: {
    'Content-Type': 'application/json',
  },
});

export default instance;
