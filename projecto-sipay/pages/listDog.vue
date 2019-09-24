<template>
  <div class="container">
    <div>
      <h2 class="title">
        Listado Perro
      </h2>
      <TablaPerros />
    </div>
  </div>
</template>

<script>
import TablaPerros from '~/components/TablaPerros.vue'



export default {
  components: {
    TablaPerros
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