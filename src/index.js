import React from 'react';
import ReactDOM from 'react-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import axios from "axios";
import ApiURLs from './api/ApiURLs';

// React toastify
import 'react-toastify/dist/ReactToastify.css';
// React toastify

// Axios
// var AUTH_TOKEN = "5zBYEuFS2lbMSIbTuG6xbcAgRV1jJaca6onVH0gV";
axios.defaults.baseURL = ApiURLs.BASE_URL;
axios.defaults.headers.post['Content-Type']='application/json';
axios.defaults.headers.post['Accept']='application/json';
axios.defaults.headers.post['Access-Control-Allow-Headers'] ='*';
axios.defaults.headers.post['Access-Control-Allow-Origin'] ='*';
axios.defaults.headers.post['Access-Control-Allow-Methods'] ='*';
axios.defaults.headers.post['Access-Control-Allow-Credentials'] = true;
axios.interceptors.request.use(function (config) {
  const token = localStorage.getItem('auth_token');
  config.headers.Authorization = token?`Bearer ${token}`:'';
  return config;
})
// axios.defaults.headers.common['Authorization'] = 'Bearer ' + AUTH_TOKEN;
// Axios

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
