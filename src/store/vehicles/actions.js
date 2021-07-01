import axios from 'axios'

export function getVehicles ({ commit }) {
  axios.get('http://localhost/api/veiculos')
    .then(response => {
      commit('SET_VEHICLES', response.data.data)
    })
}

export function searchVehicles ({ commit }, terms) {
  axios.get(`http://localhost/api/veiculos/find?q=${terms}`)
    .then(response => {
      commit('SET_VEHICLES', response.data.data)
    })
}

export function getBrands ({ commit }) {
  axios.get('http://localhost/api/marcas')
    .then(response => {
      commit('SET_BRANDS', response.data.data)
    })
}
