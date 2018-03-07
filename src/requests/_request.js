import axios from 'axios';

export const API_BASE_URL = 'http://localhost:8989/api';

export function get(url, config) {
  return axios.get(url, config);
}

export function post(url, data, config) {
  return axios.post(url, data, config);
}

export function put(url, data, config) {
  return axios.put(url, data, config);
}

export function patch(url, data, config) {
  return axios.patch(url, data, config);
}

export function del(url, config) {
  return axios.delete(url, config);
}
