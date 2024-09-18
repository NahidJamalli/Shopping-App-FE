<template>
  <div class="cart">
    <h2>Your Shopping Cart</h2>
    <div v-if="cartItems.length">
      <div v-for="(item, index) in cartItems" :key="item.product.id" class="cart-item">
        <p>{{ item.product.name }} - ${{ item.product.price }} x {{ item.quantity }}</p>
        <div class="quantity-controls">
          <button @click="decreaseQuantity(item)">-</button>
          <span>{{ item.quantity }}</span>
          <button @click="increaseQuantity(item)">+</button>
          <button @click="removeFromCart(item.product.id)">Remove</button>
        </div>
      </div>
      <p class="total">Total: ${{ cartTotal }}</p>
      <button @click="checkout">Checkout</button>
      <button @click="clearCart">Empty Cart</button>
    </div>
    <p v-else>Your cart is empty.</p>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import CartService from '../services/CartService';

const cartItems = ref([]);
const cartTotal = ref(0);

onMounted(async () => {
  await fetchCart();
});

async function fetchCart() {
  try {
    const cart = await CartService.getCart();
    cartItems.value = cart.items;
    cartTotal.value = cart.total;
  } catch (error) {
    console.error("Error fetching cart:", error);
  }
}

async function increaseQuantity(item) {
  try {
    await CartService.addProductToCart(item.product.id);
    await fetchCart();
  } catch (error) {
    console.error("Error increasing quantity:", error);
  }
}

async function decreaseQuantity(item) {
  if (item.quantity > 1) {
    try {
      await CartService.addProductToCart(item.product.id);
      await fetchCart();
    } catch (error) {
      console.error("Error decreasing quantity:", error);
    }
  }
}

async function removeFromCart(productId) {
  try {
    await CartService.removeProductFromCart(productId);
    await fetchCart();
  } catch (error) {
    console.error("Error removing product:", error);
  }
}

async function clearCart() {
  try {
    await CartService.clearCart();
    await fetchCart();
  } catch (error) {
    console.error("Error clearing cart:", error);
  }
}

function checkout() {
  alert('Proceeding to checkout...');
}
</script>

<style scoped>
</style>
