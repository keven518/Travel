export default {
  changeCity(state, city) {
    console.log('gb: ', city)
    state.city = city
    try {
      localStorage.city = city
    } catch (e) {}      
  }
}