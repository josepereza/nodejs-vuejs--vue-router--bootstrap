<template>
  <div class="jumbotron">
    <h4>Ruta Tres</h4>
    <p>El id es {{id}}</p>
  </div>
</template>
<script>
export default {
  name: 'ComponenteDos',
  data(){
    return {
      id: this.$route.params.id
    }
  }
}
</script>
