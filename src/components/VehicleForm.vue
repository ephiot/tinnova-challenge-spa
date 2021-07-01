<template>
    <q-form class="q-gutter-md">
      <q-input
        filled
        v-model="row.vehicle"
        label="Veículo"
        hint="Nome do veículo"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Informe o nome do veículo']"
      />

      <q-select
        filled
        v-model="row.brand"
        :options="options"
        label="Marca"
        hint="Marca do veículo"
        lazy-rules
        :rules="[ val => val && val !== '' || 'Escolha a marca do veículo']"
      />

      <q-input
        filled
        type="number"
        v-model="row.year"
        label="Ano do veículo"
        maxlength="4"
        lazy-rules
        :rules="[
          val => val !== null && val !== '' || 'Informe o ano do veículo',
          val => val >1969 && val <= (new Date()).getFullYear() || 'Informe o ano do veículo'
        ]"
      />

      <q-input
        v-model="row.description"
        type="textarea"
        filled
      />

      <q-toggle v-model="row.sold" label="Este carro já foi vendido ?" />

      <div>
        <q-btn label="Salvar" type="submit" color="primary"/>
        <q-btn label="Cancelar" type="button" color="red" flat class="q-ml-sm" @click="doCancel" />
      </div>
    </q-form>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'VehicleForm',

  data () {
    return {
      edit: false,
      row: {
        vehicle: '',
        brand: '',
        year: '',
        description: '',
        sold: false
      },
      show: false
    }
  },

  computed: {
    options () {
      return [
        {
          label: 'Selecione uma marca',
          value: ''
        }
      ]
    }
  },

  methods: {
    setData (data) {
      this.row = data
    },
    doSubmit () {
      this.$emit('submit', { edit: this.edit, data: this.row })
    },
    doCancel () {
      this.$emit('cancel')
    }
  }
})
</script>
