<template>
  <div id="app">
    <Header />
    <main class="content">
      <router-view />
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';

export default {
  name: 'App',
  components: {
    Header,
    Footer,
  },
};
</script>

<style>
/* Reset default margins/padding and make page fill viewport */
html, body {
  margin: 0;
  padding: 0;
  height: 100%;
}

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.content {
  flex: 1; /* This pushes the footer to the bottom */
}

/* Global styles */
body {
  font-family: 'Segoe UI', sans-serif;
  background-color: #ffffff;
  color: #35495e;
}
</style>
