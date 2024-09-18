<template>
  <div id="app">
    <header>
      <nav>
        <router-link to="/">Home</router-link>
        <router-link to="/cart">Cart</router-link>
      </nav>
    </header>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script setup>
// No specific logic needed in this simple template setup
</script>

<style scoped>
#app {
  font-family: Roboto, sans-serif;
  text-align: center;
}

header {
  background-color: #f8f9fa;
  padding: 10px;
}

nav a {
  margin: 0 15px;
  text-decoration: none;
  font-weight: bold;
}

main {
  padding: 20px;
}
</style>
