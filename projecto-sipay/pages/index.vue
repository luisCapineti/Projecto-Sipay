<template>
  <div class="container">
    <div>
      <h2 class="title">
        projecto-sipay
      </h2>
      <nuxt-link to="/searchDog">Busqueda De Perros</nuxt-link>
      -
      <nuxt-link to="/listDog">Listado de perros</nuxt-link>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  mounted () {
    //Almacenamos el listado de todos los perros en el estado para luego usarlo mas adelante
        axios.get('https://dog.ceo/api/breeds/list/all')
        .then((res) => {
          this.$store.commit('perrosStore/add', res.data);
      })
    }
  }
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}
</style>
