<template>
	<div>
		<b-form-input list="my-list-id" v-model="dogName"></b-form-input>
	  	<datalist id="my-list-id">
	    	<option v-for="(value, name) in perros">{{ name }}</option>
	  	</datalist>
	  	<b-button class="boton"v-on:click="search()">Buscar</b-button>
	  	<DogCard v-if ="cardHandler"/>
	</div>
</template>
		
<script>
import DogCard from '~/components/DogCard.vue'
import { mapMutations } from 'vuex'
  export default {
  	components: {
    	DogCard
  	},
    data() {
      return {
        perros: this.$store.state.perrosStore.perros.message,
        cardHandler : false,
        dogName:""
      }
    },
    methods:{
    	search(){
    		this.cardHandler = false;
    		this.$store.commit('perrosStore/imgsearchData', this.dogName)
    		setTimeout(() => {
          		this.cardHandler = true;
        	}, 1000)
    	}
    }
  }
</script>


<style>
.boton:{
    margin: 10px 0 10px 0;
}
</style>
