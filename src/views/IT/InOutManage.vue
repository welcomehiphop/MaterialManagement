<template>
  <v-container>
    <div class="text-center">
      <h1>In-Out Management</h1>
    </div>
    <!-- search tab -->
    <v-card class="elevation-5 mt-7 px-5">
      <v-row align="center">
        <v-col cols="1">
          <v-subheader>
            <div class="search">Spare Code:</div>
          </v-subheader>
        </v-col>
        <v-col cols="2">
          <v-text-field
            v-on:keyup.enter="onEnter"
            class="mb-4"
            v-model.trim="search"
            append-icon="mdi-magnify"
            label="Search"
            single-line
            hide-details
          ></v-text-field>
        </v-col>
        <v-col cols="1">
          <v-subheader>
            <div class="search">Movement:</div>
          </v-subheader>
        </v-col>
        <v-col cols="1">
          <v-select
            @change="onSelected"
            v-model="selectMovement"
            :items="movements"
            item-text="movement"
            item-value="value"
            label="Select Plant"
          ></v-select>
        </v-col>
        <v-col cols="1">
          <v-subheader>
            <div class="search">Plant:</div>
          </v-subheader>
        </v-col>
        <v-col cols="1">
          <v-select
            @change="onSelected"
            v-model="selectPlant"
            :items="plants"
            item-text="plant"
            item-value="value"
            label="Select Plant"
          ></v-select>
        </v-col>
        <v-spacer></v-spacer>
        <v-col cols="1" class="mr-10">
          <v-btn class="elevation-5" @click="onSearch()" dark>
            Search
          </v-btn>
        </v-col>
        <v-col cols="2">
          <v-btn class="pa-6 mr-5" href="/esrc/it/addgr" color="primary">
            GR
          </v-btn>
          <v-btn class="pa-6" href="/esrc/it/addgi" color="primary">
            GI
          </v-btn>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="8" md="10" xl="11"></v-col>
        <v-col cols="4" md="2" xl="1">
          <v-btn width="95%" color="primary" @click="excel">Excel</v-btn>
        </v-col>
      </v-row>
    </v-card>

    <!-- table data -->
    <v-data-table
      dense
      :headers="headers"
      :items="data_set"
      item-key="name"
      class="elevation-5 pt-5 ma-10"
      :calculate-widths="true"
      :footer-props="{
        'items-per-page-options': [10, 20, 30, 40],
      }"
      :items-per-page="20"
    >
      <template v-slot:item="{ item }">
        <tr class="mx-2">
          <td>
            <v-layout justify-center>
              {{
                data_set
                  .map(function(x) {
                    return x.id;
                  })
                  .indexOf(item.id) + 1
              }}
            </v-layout>
          </td>

          <td>
            <v-layout justify-center> {{ item.spare_code }}</v-layout>
          </td>
          <td>
            <v-layout justify-center>{{ item.movement }}</v-layout>
          </td>
          <td>
            <v-layout justify-center>{{ item.description }}</v-layout>
          </td>
          <td>
            <v-layout justify-center>{{ item.location_code }}</v-layout>
          </td>
          <td>
            <v-layout justify-center>{{ item.qty }}</v-layout>
          </td>
          <td>
            <v-layout justify-center>{{ item.emp_name }}</v-layout>
          </td>
          <td>
            <v-layout justify-center>{{ item.reg_date }} </v-layout>
          </td>
          <td>
            <v-layout justify-center>{{ item.plant }}</v-layout>
          </td>
          <td>
            <div class="actionIcon">
              <a href="" class="ml-3" @click="ShareData(item.id, item.movement)"
                ><img
                  class="mr-4"
                  src="@/assets/reviews.png"
                  height="40px"
                  width="40px"
                  alt="Image not found"
                />
                <div class="mr-3">Detail</div></a
              >
            </div>
          </td>
        </tr>
      </template>
    </v-data-table>
  </v-container>
</template>

<script>
import {onExport} from '@/function/exportexcel'
import api from "@/services/api";
export default {
  async mounted() {
    const condition = {
      spare_code: "",
      movement: "",
      plant: "",
    };
    const result = await api.getITInout(condition);
    this.data_set = result;
  },
  name: "Home",
  components: {},
  data() {
    return {
      search: "",
      selectMovement: "",
      selectPlant: "",
      plants: [
        { plant: "All", value: "" },
        { plant: "A/C", value: "AC" },
        { plant: "DW", value: "DW" },
        { plant: "KS", value: "KS" },
        { plant: "PBA", value: "PBA" },
        { plant: "REF", value: "REF" },
        { plant: "W/M", value: "WM" },
      ],
      movements: [
        { movement: "All", value: "" },
        { movement: "GI", value: "GI" },
        { movement: "GR", value: "GR" },
      ],
      data_set: [],
      headers: [
        {
          text: "No",
          value: "No",
          sortable: false,
          width: "10%",
          align: "center",
        },
        {
          text: "Spare Code",
          value: "spare_code",
          sortable: false,
          width: "15%",
          align: "center",
        },
        {
          text: "Movement",
          value: "movement",
          sortable: false,
          width: "1%",
          align: "center",
        },
        {
          text: "Spare Name",
          value: "spare_name",
          sortable: false,
          width: "15%",
          align: "center",
        },
        {
          text: "Location",
          value: "location",
          sortable: false,
          width: "15%",
          align: "center",
        },
        {
          text: "Qty",
          value: "qty",
          sortable: false,
          width: "1%",
          align: "center",
        },
        {
          text: "Reg.Name",
          value: "reg_name",
          sortable: false,
          align: "center",
          width: "15%",
        },
        {
          text: "Reg.Date",
          value: "reg_date",
          sortable: false,
          width: "15%",
          align: "center",
        },
        {
          text: "Plant",
          value: "plant",
          sortable: false,
          width: "10%",
          align: "center",
        },
      ],
    };
  },
  methods: {
    excel(){
      onExport("IT_Inout",this.data_set)
    },
    async onSelected() {
      const condition = {
        spare_code: this.search,
        movement: this.selectMovement,
        plant: this.selectPlant,
      };
      const result = await api.getITInout(condition);
      this.data_set = result;
    },
    async onEnter() {
      const condition = {
        spare_code: this.search,
        movement: this.selectMovement,
        plant: this.selectPlant,
      };
      const result = await api.getITInout(condition);
      this.data_set = result;
    },
    async onSearch() {
      const condition = {
        spare_code: this.search,
        movement: this.selectMovement,
        plant: this.selectPlant,
      };
      const result = await api.getITInout(condition);
      this.data_set = result;
    },
    ShareData(id, movement) {
      if (movement === "GI") {
        this.$router.push(`/esrc/it/detailgi/${id}`);
      } else {
        this.$router.push(`/esrc/it/detailgr/${id}`);
      }
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
