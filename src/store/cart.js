import { reactive, computed } from 'vue';
import { defineStore } from 'pinia';

export const useCartStore = defineStore('cart', () => {
  const state = reactive({
    products: [],
  });

  const addProduct = (product) => {
    const existingProduct = state.products.find((p) => p.id === product.id);
    if (existingProduct) {
      existingProduct.quantity++;
    } else {
      state.products.push({ ...product, quantity: 1 });
    }
  };

  const removeProduct = (product) => {
    state.products = state.products.filter((p) => p.id !== product.id);
  };

  const increaseQuantity = (product) => {
    const existingProduct = state.products.find((p) => p.id === product.id);
    if (existingProduct && existingProduct.quantity < 5) {
      existingProduct.quantity++;
    }
  };

  const decreaseQuantity = (product) => {
    const existingProduct = state.products.find((p) => p.id === product.id);
    if (existingProduct && existingProduct.quantity > 1) {
      existingProduct.quantity--;
    }
  };

  const emptyCart = () => {
    state.products = [];
  };

  const total = computed(() => {
    return state.products.reduce((acc, product) => acc + product.price * product.quantity, 0);
  });

  return {
    products: state.products,
    addProduct,
    removeProduct,
    increaseQuantity,
    decreaseQuantity,
    emptyCart,
    total,
  };
});
