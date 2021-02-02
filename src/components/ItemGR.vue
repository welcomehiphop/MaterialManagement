<template>
  <v-container>
    <h2>Spare List:</h2>
    {{$store.state.selected}}
    <v-card class="mt-10">
      <v-row justify="center" align="center">
        <v-col cols="3">
          <v-subheader>
            <div class="search">Spare Code :</div>
          </v-subheader>
        </v-col>
        <v-col cols="8" class="mt-5">
          <v-text-field outlined dense clearable />
        </v-col>
      </v-row>
    </v-card>

    <v-data-table
      dense
      :headers="headers"
      :items="data_set"
      item-key="name"
      class="elevation-1 mt-10 row-pointer"
      :footer-props="{
        'items-per-page-options': [10, 20, 30, 40],
      }"
      :items-per-page="20"
    >
      <template v-slot:item="{ item }">
        <tr @click="onClick(item.id)">
          <td>{{ item.spare_code }}</td>
          <td>{{ item.description }}</td>
          <td></td>
        </tr>
      </template>
    </v-data-table>
  </v-container>
</template>

<script>
import api from "@/services/api";

export default {
  async mounted() {
    const result = await api.getEsrcData();
    this.data_set = result;
  },
  data() {
    return {
  
      data_set: [],
      headers: [
        { text: "Spare Code", value: "spare_code", sortable: false },
        { text: "Spare Name", value: "spare_name", sortable: false },

      ],
    };
  },
  methods: {
    onClick(id) {
      this.$store.commit('setSelected',id)
      this.$router.push('/addgr')
      console.log(this.$store.state.selected , id)
    },
  },
};
</script>

<style scoped>
.row-pointer {
  cursor: pointer;
}
</style>
