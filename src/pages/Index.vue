<template>
  <q-page class="flex content-start q-pa-xl">
    <!-- Delete dialog -->
    <vehicle-delete-confirm ref="deleteDialog" @delete="doDelete" />

    <!-- Search -->
    <search-bar @search="search" @callDelete="callDelete" />

    <!-- Table -->
    <vehicles-table :rows="vehicles" />
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'
import { mapActions, mapGetters } from 'vuex'
import SearchBar from '../components/SearchBar'
import VehiclesTable from '../components/VehiclesTable'
import VehicleDeleteConfirm from '../components/VehicleDeleteConfirm'

export default defineComponent({
  name: 'PageIndex',

  components: {
    SearchBar,
    VehiclesTable,
    VehicleDeleteConfirm
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
    ...mapActions('vehicles', ['getVehicles', 'searchVehicles', 'deleteVehicle']),

    search (terms) {
      if (terms.length < 1) {
        return this.getVehicles()
      }
      this.searchVehicles(terms)
    },

    callDelete (row) {
      this.$refs.deleteDialog.open(row)
    },

    doDelete (row) {
      this.deleteVehicle(row.id)
    }
  },

  mounted () {
    this.getVehicles()
  }
})
</script>
