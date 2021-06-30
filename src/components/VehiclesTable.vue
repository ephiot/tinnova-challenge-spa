<template>
  <q-table
    class='full-width'
    :rows="rows"
    :columns="columns"
    row-key="name"
    color="amber"
  >
    <template v-slot:header="props">
      <q-tr :props="props">
        <q-th
          v-for="col in props.cols"
          :key="col.name"
          :props="props"
        >
          {{ col.label }}
        </q-th>
        <q-th class='text-center'>
          Ações
        </q-th>
      </q-tr>
    </template>
    <template v-slot:body="props">
      <q-tr :props="props" :key="`m_${props.row.index}`">
        <q-td
          v-for="col in props.cols"
          :key="col.name"
          :props="props"
        >
          {{ col.value }}
        </q-td>
        <q-td class='text-center'>
          <q-btn-group outline>
            <q-btn outline color="blue" title="Editar" icon-right="edit" />
            <q-btn outline color="red" title="Excluir" icon-right="delete" />
          </q-btn-group>
        </q-td>
      </q-tr>
    </template>
  </q-table>
</template>

<script>
import { defineComponent } from 'vue'

const columns = [
  {
    name: 'vehicle',
    required: true,
    label: 'Veículo',
    align: 'left',
    field: row => row.vehicle,
    format: val => `${val}`,
    sortable: true
  },
  {
    name: 'brand',
    required: true,
    label: 'Marca',
    align: 'left',
    field: row => row.brand,
    format: val => `${val}`,
    sortable: true
  },
  {
    name: 'year',
    required: true,
    label: 'Ano',
    align: 'left',
    field: row => row.year,
    format: val => `${val}`,
    sortable: true
  },
  {
    name: 'sold',
    required: true,
    label: 'Vendido',
    align: 'left',
    field: row => row.sold,
    format: val => val ? 'Sim' : 'Não',
    sortable: true
  },
  {
    name: 'created_at',
    required: true,
    label: 'Cadastrado em',
    align: 'left',
    field: row => row.created_at,
    format: val => `${val}`,
    sortable: true
  },
  {
    name: 'updated_at',
    required: true,
    label: 'Atualizado em',
    align: 'left',
    field: row => row.updated_at,
    format: val => `${val}`,
    sortable: true
  }
]

export default defineComponent({
  name: 'VehiclesTable',

  props: {
    rows: {
      type: Array,
      default () {
        return []
      }
    }
  },

  data () {
    return {
      columns
    }
  },

  methods: {
    search () {
      this.$emit('search', this.terms)
    }
  }
})
</script>
