import axios from 'axios';

const baseURL = 'https://nafees.lasercoz.com';

const instance = axios.create({
  headers: {
    'Content-Type': 'application/json',
    'allow-origin': '*',
  },
});

// Function to get token from state or context
const getToken = () => {
  // Implement your logic to retrieve the token (e.g., from localStorage or context)
  return localStorage?.getItem('accessToken') || '';
};

// Utility for POST
export const post = async (url: string, data: any, withToken = false, contentType = 'application/json') => {
  const culture = localStorage?.getItem('culture') || 'en-US';
  const headers = {
    'Content-Type': contentType,
    ...(withToken && { Authorization: `Bearer ${getToken()}` }),
  };

  const response = await instance.post(`${baseURL}/${culture}/${url}`, data, { headers });
  return response.data;
};

// Utility for GET
export const get = async (url: string, withToken = false, params = {}) => {
  const culture = localStorage?.getItem('culture') || 'en-US';
  const headers = {
    ...(withToken && { Authorization: `Bearer ${getToken()}` }),
  };

  const response = await instance.get(`${baseURL}/${culture}/${url}`, { headers, params });
  return response.data;
};

// Utility for PUT
export const put = async (url: string, data: any, withToken = false, contentType = 'application/json') => {
  const culture = localStorage?.getItem('culture') || 'en-US';
  const headers = {
    'Content-Type': contentType,
    ...(withToken && { Authorization: `Bearer ${getToken()}` }),
  };

  const response = await instance.put(`${baseURL}/${culture}/${url}`, data, { headers });
  return response.data;
};

// Utility for DELETE
export const del = async (url: string, withToken = false) => {
  const culture = localStorage?.getItem('culture') || 'en-US';
  const headers = {
    ...(withToken && { Authorization: `Bearer ${getToken()}` }),
  };

  const response = await instance.delete(`${baseURL}/${culture}/${url}`, { headers });
  return response.data;
};
