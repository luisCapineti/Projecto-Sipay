<template>
	<div>
		<b-carousel
            id="carousel-no-animation"
            style="text-shadow: 0px 0px 2px #000"
            no-animation
            indicators
            img-width="1024"
            img-height="480"
            v-if="listaIMG"
          >
            <b-carousel-slide v-for="item in listaIMG"
              :img-src="item">
              </b-carousel-slide>
        </b-carousel>
	</div>
</template>
		
<script>
import axios from 'axios'
import { mapMutations } from 'vuex'
  export default {
    data() {
      return {
        listaIMG: this.$store.state.perrosStore.perrosimgList,
        dogtype:{}
      }
    },
    mounted () {
    //recuperamos la imagenes
        let dogInfo = this.$store.state.perrosStore.perroData
        axios.get('https://dog.ceo/api/breed/'+dogInfo+'/images/random/10')
        .then((res) => {
            this.$store.commit('perrosStore/perroimg', res.data.message)
            //Esperamos a que se carguen todas las imagenes.
            setTimeout(() => {}, 2000)
        })
    }
  }
</script>


<style>

</style>