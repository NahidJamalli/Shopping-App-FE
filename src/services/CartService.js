import axios from '../axios';

export default {
  async getCart() {
    try {
      const response = await axios.get('/api/cart');
      return response.data;
    } catch (error) {
      console.error("Error fetching cart:", error);
      throw error;
    }
  },

  async addProductToCart(productId) {
    try {
      const response = await axios.post(`/api/cart/add/${productId}`);
      return response.data;
    } catch (error) {
      console.error("Error adding product to cart:", error);
      throw error;
    }
  },

  async removeProductFromCart(productId) {
    try {
      const response = await axios.delete(`/api/cart/remove/${productId}`);
      return response.data;
    } catch (error) {
      console.error("Error removing product from cart:", error);
      throw error;
    }
  },

  async clearCart() {
    try {
      const response = await axios.post('/api/cart/clear');
      return response.data;
    } catch (error) {
      console.error("Error clearing cart:", error);
      throw error;
    }
  }
};
