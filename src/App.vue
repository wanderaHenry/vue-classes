<template>
  <div id="app" class="app-container">
    <Header />
    <MainContent />
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header.vue';
import MainContent from './components/MainContent.vue';
import Footer from './components/Footer.vue';

export default {
  name: 'App',
  components: {
    Header,
    Footer,
    MainContent,
  },
};
</script>

<style>
/*global stles*/
body {
  font-family: 'Segoe UI', sans-serif;
  background-color: #ffffff;
  color: #35495e;
}
</style>
