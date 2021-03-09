<template>
  <v-dialog v-model="show" max-width="500px" scrollable>
    <v-card class="pa-10">
      <h2>Select Spare Part</h2>
      <v-card class="ma-5">
        <div>
          <v-row>
            <v-col cols="4">
              <v-subheader>
                Location
              </v-subheader>
            </v-col>
            <v-col cols="7">
              <v-select
                @change="onSelected()"
                outlined
                dense
                v-model="searchLocation"
                :items="locations"
                item-text="location_code"
                item-value="value"
              />
            </v-col>
          </v-row>
        </div>
        <div>
          <v-row>
            <v-col cols="4">
              <v-subheader>
                Spare Code
              </v-subheader>
            </v-col>
            <v-col cols="7">
              <v-text-field
                outlined
                dense
                v-model="searchSpareCode"
              ></v-text-field>
            </v-col>
          </v-row>
        </div>
      </v-card>

      <v-data-table
        dense
        :headers="headers"
        :items="data_set"
        item-key="name"
        class="elevation-1 row-pointer"
        :items-per-page="6"
      >
        <template v-slot:item="{ item }">
          <tr @click="onClick(item)">
            <td>{{ item.spare_code }}</td>
            <td>{{ item.description }}</td>
            <td>{{ item.location }}</td>
            <td>{{ item.qty }}</td>
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
import { mapMutations } from "vuex";
export default {
  async mounted() {
    const result = await api.getSparePart("%%", "%%");
    this.data_set = result;
    const data = await api.getAllLocation();
    this.locations = data.data;
    this.locations.unshift(this.searchLocation);
  },
  props: {
    value: Boolean,
  },
  data() {
    return {
      searchLocation: { location_code: "All", value: "" },
      searchSpareCode: "",
      data_set: [],
      locations: [],
      headers: [
        { text: "Spare Code", value: "spare_code", sortable: false },
        { text: "Spare Name", value: "spare_name", sortable: false },
        { text: "Location", value: "location", sortable: false },
        { text: "Qty", value: "qty", sortable: false },
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
    async onSelected() {
      const result = await api.getSparePart(
        "%" + this.searchLocation + "%",
        "%" + this.searchSpareCode + "%"
      );
      console.log(result)
      this.data_set = result;
    },
    ...mapMutations(["setSpare"]),
    onClick(item) {
      this.setSpare(item);
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
