<script>

import Navegacion from './components/Navegacion.vue';

export default{
  name: "App",
  components: {
    Navegacion,
  },
}

</script>

<template> 
  <div class="app bg-dark">
    <Navegacion />
    <router-view></router-view>
  </div>
</template>

<style scoped>
</style>
