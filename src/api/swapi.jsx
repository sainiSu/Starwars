import axios from 'axios';

const api = axios.create({
  baseURL: 'https://swapi.dev/api/',
});

export const getShips = async () => {
  try {
    const response = await api.get('starships/');
    return response.data;
  } catch (error) {
    console.error('Error fetching ships:', error);
    throw error;
  }
};
