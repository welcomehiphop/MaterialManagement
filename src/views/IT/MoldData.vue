<template>
  <v-container>
    <Loading :start="loading" />
    <div class="text-center">
      <h1>Mold Data</h1>
    </div>
    <v-card class="elevation-5 mt-7 px-5">
      <v-row align="center">
        <v-col cols="1">
          <v-subheader>
            <div class="search">Spare Code:</div>
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
          <v-btn dark @click="onSearch()">
            Search
          </v-btn>
        </v-col>
        <v-col cols="1">
          <v-btn class="pa-5" href="/esrc/itroom/addspare" color="primary">
            ADD
          </v-btn>
        </v-col>
      </v-row>
    </v-card>
    <v-card class="elevation-2 ma-10">
      <v-data-table
        :headers="headers"
        :items="data_set"
        item-key="name"
        class="elevation-1"
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
              <v-layout justify-center>
                {{ item.type }}
              </v-layout>
            </td>
            <td>
              <v-layout justify-center>
                {{ item.spare_code }}
              </v-layout>
            </td>
            <td>
              <v-layout justify-center>
                {{ item.description }}
              </v-layout>
            </td>
            <td>
              <v-layout justify-center>
                {{ item.safe_stock }}
              </v-layout>
            </td>
            <td>
              <v-layout justify-center>
                {{ item.price }}
              </v-layout>
            </td>
            <td>
              <v-layout justify-center>
                Pamorn Sirimak
              </v-layout>
            </td>
            <td>
              <v-layout justify-center>
                {{ item.plant }}
              </v-layout>
            </td>
            <td>
              <v-layout justify-center>
                <img
                  :src="imageUrl + item.picture"
                  alt="Image not found"
                  width="80px"
                  height="80px"
                />
              </v-layout>
            </td>
            <td>
              <div class="actionIcon">
                <a href="" @click="ShareData(item.id)"
                  ><img
                    src="@/assets/edit.png"
                    height="25px"
                    width="25px"
                    alt="Image not found"
                /></a>
                <a href="javascript:;"
                  ><img
                    class="ml-3"
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
import {imageUrl} from '@/services/constants'
import Loading from "@/components/Loading";
import api from "@/services/api";
export default {
  methods: {
    async onSelected() {
      this.loading = true;
      const data = {
        spare_code: this.search,
        plant: this.selectPlant,
      };
      const result = await api.getITMold(data);
      this.data_set = result.data;
      this.loading = false;
    },
    async onEnter() {
      this.loading = true;
      const data = {
        spare_code: this.search,
        plant: this.selectPlant,
      };
      const result = await api.getITMold(data);
      this.data_set = result.data;
      this.loading = false;
    },
    async onSearch() {
      this.loading = true;
      const data = {
        spare_code: this.search,
        plant: this.selectPlant,
      };
      const result = await api.getITMold(data);
      this.data_set = result.data;
      this.loading = false;
    },
    ShareData(id) {
      this.$router.push(`editspare/${id}`);
    },
    async onDelete(id) {
      if (confirm("Do you really want to delete?")) {
        this.loading = true;
        await api.deleteITMold(id);
      }
      const data = {
        spare_code: "",
        plant: "",
      };
      const result = await api.getITMold(data);
      this.data_set = result.data;
      this.loading = false;
    },
  },
  async mounted() {
    this.loading = true
    const data = {
      spare_code: "",
      plant: "",
    };
    const result = await api.getITMold(data);
    this.data_set = result.data;
    this.loading = false
  },
  data() {
    return {
      imageUrl,
      loading: false,
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
        {
          text: "No",
          value: "No",
          sortable: false,
          width: "2%",
          align: "center",
        },
        {
          text: "Type",
          value: "type",
          sortable: false,
          width: "10%",
          align: "center",
        },
        {
          text: "Spare Code",
          value: "spare_code",
          sortable: false,
          width: "10%",
          align: "center",
        },
        {
          text: "Description",
          value: "description",
          sortable: false,
          width: "20%",
          align: "center",
        },
        {
          text: "Safe Stock",
          value: "safe_stock",
          sortable: false,
          width: "2%",
          align: "center",
        },
        {
          text: "Price(Bath)",
          value: "price",
          sortable: false,
          width: "2%",
          align: "center",
        },
        {
          text: "Reg.Name",
          value: "reg_name",
          sortable: false,
          width: "10%",
          align: "center",
        },
        {
          text: "Plant",
          value: "plant",
          sortable: false,
          width: "1%",
          align: "center",
        },
        {
          text: "Picture",
          value: "picture",
          sortable: false,
          width: "10%",
          align: "center",
        },
      ],
    };
  },
  components: {
    Loading,
  },
};
</script>

<style scoped>
.actionIcon {
  margin: 30px auto 30px auto;
  text-align: center;
}
</style>
