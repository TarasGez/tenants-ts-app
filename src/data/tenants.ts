import axios from 'axios';

export function getTenants() {
  return axios
    .get('https://hungry-skinny-cappelletti.glitch.me/tenants')
    .then((response) => response.data)
};