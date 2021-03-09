<template>
  <v-container>
    <div class="text-center">
      <h1>Location Data</h1>
    </div>
    <v-card class="elevation-5 mt-7 px-5">
      <v-row align="center">
        <v-col cols="1">
          <v-subheader>
            <div class="search">Location Code:</div>
          </v-subheader>
        </v-col>
        <v-col cols="3">
          <v-text-field
            v-on:keyup.enter="onEnter"
            class="mb-4"
            v-model="search"
            append-icon="mdi-magnify"
            label="Search"
            single-line
            hide-details
          ></v-text-field>
        </v-col>
        <v-col cols="1"></v-col>
        <v-col cols="1">
          <v-subheader>
            <div class="search">Plant:</div>
          </v-subheader>
        </v-col>
        <v-col cols="3">
          <v-select
            @change="onSelected()"
            v-model="selectPlant"
            :items="plants"
            item-text="plant"
            item-value="value"
            label="Select Plant"
            persistent-hint
            single-line
          ></v-select>
        </v-col>
        <v-spacer></v-spacer>
        <v-col cols="1" class="mr-10">
          <v-btn dark @click="onClickSearch()">
            Search
          </v-btn>
        </v-col>
        <v-col cols="1">
          <v-btn class="pa-5" href="/esrc/ppe/addlocation" color="primary">
            ADD
          </v-btn>
        </v-col>
      </v-row>
    </v-card>

    <v-card class="mx-auto mt-10" width="600px">
      <v-data-table
        :headers="headers"
        :items="data_set"
        item-key="name"
        class="elevation-1"
        :footer-props="{
          'items-per-page-options': [10, 20, 30, 40],
        }"
        :items-per-page="10"
      >
        <template v-slot:item="{ item }">
          <tr>
            <td>
              {{
                data_set
                  .map(function(x) {
                    return x.id;
                  })
                  .indexOf(item.id) + 1
              }}
            </td>
            <td>{{ item.location_code }}</td>
            <td>{{ item.location_name }}</td>
            <td>{{ item.plant }}</td>
            <td>
              <div class="actionIcon">
                <a href="" class="ml-3" @click="ShareData(item.id)"
                  ><img
                    src="@/assets/edit.png"
                    height="25px"
                    width="25px"
                    alt="Image not found"
                /></a>
                <a href="javascript:;" class="ml-3"
                  ><img
                    @click="onDelete(item.id)"
                    src="@/assets/empty-tash-can.png"
                    height="25px"
                    width="25px"
                    alt="Image not found"
                /></a>
              </div>
            </td>
          </tr>
        </template>
      </v-data-table>
    </v-card>
  </v-container>
</template>

<script>
import api from "@/services/api";
export default {
  async mounted() {
    const condition = {
      location_code: "%%",
      plant: "%%",
    };
    const result = await api.getLocationData(condition);
    this.data_set = result.data;
  },
  data() {
    return {
      search: "",
      selectPlant: "",
      plants: [
        { plant: "All", value: "" },
        { plant: "KS", value: "KS" },
        { plant: "A/C", value: "AC" },
        { plant: "DW", value: "DW" },
        { plant: "PBA", value: "PBA" },
        { plant: "REF", value: "REF" },
        { plant: "W/M", value: "WM" },
      ],
      data_set: [],
      headers: [
        { text: "No", value: "No", sortable: false },
        {
          text: "Location Code",
          value: "location_code",
          sortable: false,
        },
        {
          text: "location Name",
          value: "location_name",
          sortable: false,
        },
        { text: "Plant", value: "plant", sortable: false },
      ],
    };
  },
  components: {},
  methods: {
    async onEnter() {
      const condition = {
        location_code: "%" + this.search + "%",
        plant: "%" + this.selectPlant + "%",
      };
      const result = await api.getLocationData(condition);
      this.data_set = result.data;
    },
    async onSelected() {
      const condition = {
        location_code: "%" + this.search + "%",
        plant: "%" + this.selectPlant + "%",
      };
      const result = await api.getLocationData(condition);
      this.data_set = result.data;
    },
    async onClickSearch() {
      const condition = {
        location_code: "%" + this.search + "%",
        plant: "%" + this.selectPlant + "%",
      };
      const result = await api.getLocationData(condition);
      this.data_set = result.data;
    },
    ShareData(id) {
      this.$router.push(`editlocation/${id}`);
    },
    async onDelete(id) {
      if (confirm("Do you really want to delete?")) {
        await api.deleteLocationData(id);
      }
      const condition = {
        location_code: "%" + this.search + "%",
        plant: "%" + this.selectPlant + "%",
      };
      const result = await api.getLocationData(condition);
      this.data_set = result.data;
    },
  },
};
</script>

<style scoped>
.actionIcon {
  margin: 1rem;
  text-align: center;
}
</style>
