<template>
  <div class="product-page" v-if="product">
    <div class="product-info">
      <h1>{{ product.name }}</h1>
      <p>{{ product.description }}</p>
      <p class="price">Price: ${{ product.price }}</p>
      <button @click="addToCart">Add to Cart</button>
    </div>
    <img :src="product.imageUrl" alt="Product Image">
  </div>
  <div v-else>
    <p>Loading product details...</p>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import ProductService from '../services/ProductService';
import CartService from '../services/CartService';
import { useRoute } from 'vue-router';

const product = ref(null);
const route = useRoute();

onMounted(async () => {
  const productId = route.params.id;
  try {
    product.value = await ProductService.getProductById(productId);
  } catch (error) {
    console.error("Error loading product:", error);
  }
});

async function addToCart() {
  try {
    await CartService.addProductToCart(product.value.id);
    alert('Product added to cart');
  } catch (error) {
    console.error("Error adding product to cart:", error);
  }
}
</script>

<style scoped>
</style>
