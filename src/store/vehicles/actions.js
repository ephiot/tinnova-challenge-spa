import axios from 'axios'

export function getVehicles ({ commit }) {
  axios.get('http://localhost/api/veiculos')
    .then(response => {
      commit('SET_VEHICLES', response.data.data)
    })
}
