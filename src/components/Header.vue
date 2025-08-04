<template>
  <header class="header">
    <h2>FastSHOP! your new fastest online shopping platform</h2>
    <nav>
      <a>Home</a>
      <a>About</a>
      <a>register</a>
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
nav a {
  margin: 0 10px;
  color: white;
  text-decoration: none;
}
</style>
