<template>
  <main class="main-content">
    <h2>Register for FastSHOP</h2>
    <p>Create an account to enjoy fast and secure online shopping!</p>
    <!--  form placeholder -->
    <form>
      <label for="name">Name:</label><br />
      <input type="text" id="name" /><br />

      <label for="email">Email:</label><br />
      <input type="email" id="email" /><br />

      <label for="password">Password:</label><br />
      <input type="password" id="password" /><br />

      <button type="submit">Register</button>
    </form>
  </main>
</template>

<script>
export default {
  name: 'Register',
};
</script>

<style scoped>
.main-content {
  padding: 2rem;
}
form {
  margin-top: 1rem;
}
input {
  margin-bottom: 0.5rem;
  padding: 0.4rem;
  width: 100%;
  max-width: 300px;
}
button {
  padding: 0.5rem 1rem;
  background-color: #bbc0be;
  color: white;
  border: none;
  cursor: pointer;
}
button:hover {
  background-color: #42b983;
}
</style>
