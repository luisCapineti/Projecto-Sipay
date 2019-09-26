<template>
  <div>
    <DogCard v-if ="cardHandler"/>
    <b-list-group>
      <b-list-group-item button v-for="(value, name) in items" v-on:click="search(name)"> 
        {{name}}
      </b-list-group-item>
      
    </b-list-group>
  </div>
</template>

<style>

</style>


<script>
import DogCard from '~/components/DogCard.vue'
import { mapMutations } from 'vuex'
  export default {
    components: {
      DogCard
    },
    data() {
      // declare message with an empty value
      return {
        items:this.$store.state.perrosStore.perros.message,
        cardHandler : false
      }
    },
    methods:{
      search(name){
        this.cardHandler = false;
        this.$store.commit('perrosStore/imgsearchData', name)
        setTimeout(() => {
          this.cardHandler = true;
        }, 1000)
      }

    }
  }
</script>
