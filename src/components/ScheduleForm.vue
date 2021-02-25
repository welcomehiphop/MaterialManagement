<template>
  <v-dialog v-model="show" max-width="500px" scrollable>
    <v-card class="pa-10">
      <h2>Spare List:</h2>
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
          <tr @click="onClick(item)">
            <td>{{ item.spare_code }}</td>
            <td>{{ item.description }}</td>
            <td></td>
          </tr>
        </template>
      </v-data-table>

      <v-btn class="mt-5" color="primary" @click.stop="show = false"
        >Close</v-btn
      >
    </v-card>
  </v-dialog>
</template>

<script>
import api from "@/services/api";
import { mapMutations } from 'vuex';

export default {
  async mounted() {
    const condition = {
      spare_code : "%%",
      plant :"%%"
    }
    const result = await api.getEsrcData(condition);
    this.data_set = result;
  },
  props: {
    value: Boolean,
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
  computed: {
    show: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit("input", value);
      },
    },
  },
  methods: {
    ...mapMutations(['setSelected']),
    onClick(item) {
      this.setSelected(item),
      this.show = false;

    },
  },
};
</script>

<style scoped>
.row-pointer {
  cursor: pointer;
}
</style>
