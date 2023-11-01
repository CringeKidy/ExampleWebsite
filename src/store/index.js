import { createStore } from 'vuex'

var tempArray = []

await fetch('https://peoplegeneratorapi.live/api/person/20')
      .then(res => res.json())
      .then(data => {
          tempArray = data
          console.log(this.people)
      })
      .catch(err => console.log("there was an error:", err))


export default createStore({
  state: {
    people: []
  },
  getters: {
    getData: state => state.data
  },
  mutations: {
    setArray(state, newData){
      state.data = newData
    }
  },
  actions: {
    fetchData({commit}){
      setTimeout(() => {
        const res = tempArray
        commit('setData', res)
      })
    }
  },
  modules: {
  }
})
