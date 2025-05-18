import axios from 'axios';

const baseUrl = import.meta.env.VITE_BASE_URL;
const token = import.meta.env.VITE_API_TOKEN;

const apiClient = axios.create({
  baseURL: baseUrl,
  headers: {
    'Authorization': `Bearer ${token}`,
    'Content-Type': 'application/json',
  }
});

export const getProducts = async () => {
  try {
    const response = await apiClient.get('/products');
    return response.data;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};

export default apiClient; 