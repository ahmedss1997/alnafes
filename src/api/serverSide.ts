import axios from 'axios';
import { cookies } from 'next/headers'; // Next.js server-side cookies

const baseURL = 'https://nafees.lasercoz.com';

const instance = axios.create({
  headers: {
    'Content-Type': 'application/json',
    'allow-origin': '*',
  },
});

// Server-side token/culture retrieval
const getServerAuth = async () => {
  const cookieStore = await cookies();
  return {
    token: cookieStore.get('accessToken')?.value || '',
    culture: cookieStore.get('culture')?.value || 'en-US'
  };
};

// Universal GET (works in both server and client components)
export const get = async (url: string, withToken = false, params = {}) => {
  let culture, token;
  if (typeof window !== 'undefined') {
    culture = document.cookie.match(/culture=([^;]+)/)?.[1] || 'en-US';
    token = document.cookie.match(/accessToken=([^;]+)/)?.[1] || '';
  } else {
    const resultAuth = await getServerAuth();
    culture = resultAuth.culture || 'en-US';
    token = resultAuth.token || '';
  }

  const headers = {
    ...(withToken && { Authorization: `Bearer ${token}` }),
  };

  const response = await instance.get(`${baseURL}/${culture}/${url}`, {
    headers,
    params
  });
  
  return response.data;
};

// Universal POST (works in both environments)
export const post = async (
  url: string,
  data: any,
  withToken = false,
  contentType = 'application/json'
) => {
  let culture, token;
  if (typeof window !== 'undefined') {
    culture = document.cookie.match(/culture=([^;]+)/)?.[1] || 'en-US';
    token = document.cookie.match(/accessToken=([^;]+)/)?.[1] || '';
  } else {
    const resultAuth = await getServerAuth();
    culture = resultAuth.culture || 'en-US';
    token = resultAuth.token || '';
  }

  const headers = {
    'Content-Type': contentType,
    ...(withToken && { Authorization: `Bearer ${token}` }),
  };

  const response = await instance.post(`${baseURL}/${culture}/${url}`, data, { headers });
  return response.data;
};

// Utility for PUT
export const put = async (url: string, data: any, withToken = false, contentType = 'application/json') => {
  let culture, token;
  if (typeof window !== 'undefined') {
    culture = document.cookie.match(/culture=([^;]+)/)?.[1] || 'en-US';
    token = document.cookie.match(/accessToken=([^;]+)/)?.[1] || '';
  } else {
    const resultAuth = await getServerAuth();
    culture = resultAuth.culture || 'en-US';
    token = resultAuth.token || '';
  }

  const headers = {
    'Content-Type': contentType,
    ...(withToken && { Authorization: `Bearer ${token}` }),
  };

  const response = await instance.put(`${baseURL}/${culture}/${url}`, data, { headers });
  return response.data;
};

// Utility for DELETE
export const del = async (url: string, withToken = false) => {
  let culture, token;
  if (typeof window !== 'undefined') {
    culture = document.cookie.match(/culture=([^;]+)/)?.[1] || 'en-US';
    token = document.cookie.match(/accessToken=([^;]+)/)?.[1] || '';
  } else {
    const resultAuth = await getServerAuth();
    culture = resultAuth.culture || 'en-US';
    token = resultAuth.token || '';
  }

  const headers = {
    ...(withToken && { Authorization: `Bearer ${token}` }),
  };

  const response = await instance.delete(`${baseURL}/${culture}/${url}`, { headers });
  return response.data;
};
