<template>
  <div class="header clearfix">
    <nav>
      <ul class="nav nav-pills float-right">
      <li class="nav-link"><router-link to="/">Inicio</router-link></li>
      <li class="nav-link"><router-link to="/rutaDos">Ruta 2</router-link></li>
      <li class="nav-link"><router-link to="/rutaTres/4">Ruta con Param</router-link></li>
      </ul>
      <h3 class="text muted">Demo 3</h3>
    </nav>
  </div>
</template>

<script>

export default {
  name: 'Header'
}
</script>