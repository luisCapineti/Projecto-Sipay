export const state = () => ({
  perros: {},
  perroData:{},
  perrosimgList : []
})

export const mutations = {
  add (state,  dogs ) {
    state.perros = dogs;
  },
  imgsearchData (state,  dogsData){
  	state.perroData = dogsData
  },
  perroimg (state, perrosimgList){
  	state.perrosimgList = perrosimgList
  }
}