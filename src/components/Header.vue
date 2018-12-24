<template>
  <div class="header clearfix">
    <nav>
      <ul class="nav nav-pills pull-right">
      <li><router-link to="/">Inicio</router-link></li>
      <li><router-link to="/ruta2">Ruta 2</router-link></li>
      </ul>
    </nav>
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

export default {
  name: 'Header'
}
</script>