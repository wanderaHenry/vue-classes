<template>
  <header class="header">
    <h2>FastSHOP! your new fastest online shopping platform</h2>
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/register">Register</router-link>
      <router-link to="/services">Services</router-link> 
      <router-link to="/contact-us">Contact Us</router-link> 
    </nav>
  </header>
</template>

<script>
export default {
  name: 'Header',
};
</script>

<style scoped>
.header {
  background-color: #333;
  color: white;
  padding: 1rem;
}
nav a, nav router-link {
  margin: 0 10px;
  color: white;
  text-decoration: none;
}
router-link {
  cursor: pointer;
}
</style>
