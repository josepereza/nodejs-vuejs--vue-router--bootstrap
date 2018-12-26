<template>
  <div class="container">
  <encabezado></encabezado>
  <router-view></router-view>
  </div>
</template>

<script>
import Header from './components/Header.vue'

export default {
  name: 'app',
  components: {
    encabezado: Header
  }
}
</script>
