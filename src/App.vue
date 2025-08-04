<template>
  <div>
    <Hello />
    <foota />
  </div>
</template>

<script>
import Hello from './components/greeting.vue'

import foota from './components/foota.vue'

export default {
  components: {
    Hello,
    foota
  }
}
</script>

<style scoped>
/*glabal styles*/
div {
  padding: 20px;
}
</style>
