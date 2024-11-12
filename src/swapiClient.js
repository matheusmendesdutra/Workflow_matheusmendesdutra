
const axios = require('axios');

const BASE_URL = 'https://swapi.dev/api/';

const getData = async (endpoint) => {
  try {
    const response = await axios.get(`${BASE_URL}${endpoint}`);
    return response.data;
  } catch (error) {
    throw new Error(`Erro ao buscar dados de ${endpoint}: ${error.message}`);
  }
};

module.exports = { getData };
