import axios from '../axios';

export default {
  async getProducts() {
    try {
      const response = await axios.get('/api/products');
      return response.data;
    } catch (error) {
      console.error("Error fetching products:", error);
      throw error;
    }
  },

  async getProductById(id) {
    try {
      const response = await axios.get(`/api/products/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching product with id ${id}:`, error);
      throw error;
    }
  }
};
