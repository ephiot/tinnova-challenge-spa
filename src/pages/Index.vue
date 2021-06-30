<template>
  <q-page class="flex content-start q-pa-xl">
    <!-- Search -->
    <search-bar @search="search" />

    <!-- Table -->
    <vehicles-table :rows="vehicles" />
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'
import { mapActions, mapGetters } from 'vuex'
import SearchBar from '../components/SearchBar'
import VehiclesTable from '../components/VehiclesTable'

export default defineComponent({
  name: 'PageIndex',

  components: {
    SearchBar,
    VehiclesTable
  },

  data () {
    return {
    }
  },

  computed: {
    ...mapGetters({
      vehicles: 'vehicles/vehicles'
    })
  },

  methods: {
    ...mapActions('vehicles', ['getVehicles', 'searchVehicles']),

    search (terms) {
      if (terms.length < 1) {
        return this.getVehicles()
      }
      this.searchVehicles(terms)
    }
  },

  mounted () {
    this.getVehicles()
  }
})
</script>
