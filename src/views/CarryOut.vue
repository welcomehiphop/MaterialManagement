<template>
  <v-container>
    <h1>Carry Out</h1>
    <!-- search tab -->
    <v-card class="elevation-5 mt-5 px-5">
      <v-row align="center">
        <v-col cols="1">
          <v-subheader>
            <div class="search">Requester:</div>
          </v-subheader>
        </v-col>
        <v-col cols="2">
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
        <v-col cols="1">
          <v-subheader>
            <div class="search">Reg Date :</div>
          </v-subheader>
        </v-col>
        <v-col cols="2">
          <v-menu offset-y>
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                v-model="fromDate"
                label="From * "
                v-bind="attrs"
                v-on="on"
                readonly
                prepend-icon="mdi-calendar-month-outline"
              />
            </template>
            <v-date-picker v-model="fromDate"></v-date-picker>
          </v-menu>
        </v-col>
        <v-col cols="2">
          <v-menu offset-y>
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                v-model="toDate"
                label="To * "
                v-bind="attrs"
                v-on="on"
                readonly
                prepend-icon="mdi-calendar-month-outline"
              />
            </template>
            <v-date-picker v-model="toDate"></v-date-picker>
          </v-menu>
        </v-col>
        <v-col cols="1">
          <v-subheader>
            <div class="search">Status:</div>
          </v-subheader>
        </v-col>
        <v-col cols="1">
          <v-select
            @change="onSelected()"
            v-model="selectStatus"
            :items="status"
            item-text="text"
            item-value="value"
            label="Select Plant"
            persistent-hint
            single-line
          ></v-select>
        </v-col>
        <v-spacer></v-spacer>
        <v-col cols="1" class="mr-10">
          <v-btn class="elevation-5" @click="onClickSearch()" dark>
            Search
          </v-btn>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="10"></v-col>
        <v-col cols="2">
          <div class="text-right mr-3 mb-2">
            <v-btn href="/requestcarry" color="primary">
              Request
            </v-btn>
          </div>
        </v-col>
      </v-row>
    </v-card>

    <!-- table data -->
    <v-card class elevation="2 ma-10">
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
                <a href="" @click="shareData(item.id)">
                  {{ item.docno }}
                </a>
              </v-layout>
            </td>
            <td>
              <v-layout justify-center>
                {{ item.reqType }}
              </v-layout>
            </td>
            <td>
              <v-layout justify-center>
                {{ item.purpose }}
              </v-layout>
            </td>
            <td>
              <v-layout justify-center>
                {{ item.carrier_name }}
              </v-layout>
            </td>
            <td>
              <v-layout justify-center>
                {{ item.department }}
              </v-layout>
            </td>
            <td>
              <v-layout justify-center>
                {{ item.reg_date }}
              </v-layout>
            </td>
            <td>
              <v-layout justify-center>
                {{ item.reg_name }}
              </v-layout>
            </td>
            <td>
              <v-layout justify-center>
                {{ item.status }}
              </v-layout>
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
  created() {
    this.formatDate();
    this.format_fromdate =
      this.fromDate.substring(0, 4) +
      this.fromDate.substring(5, 7) +
      this.fromDate.substring(8, 10);
    this.format_todate =
      this.toDate.substring(0, 4) +
      this.toDate.substring(5, 7) +
      this.toDate.substring(8, 10);
  },
  methods: {
    async onSelected() {
      const data = {
        emp_name: `%${this.search}%`,
        docst: `%${this.selectStatus}%`,
        fromDate: `${this.format_fromdate}`,
        toDate: `${this.format_todate}`,
      };
      let result = await api.GetCarryList(data);
      this.data_set = result.data;
    },
    async onEnter() {
      const data = {
        emp_name: `%${this.search}%`,
        docst: `%${this.selectStatus}%`,
        fromDate: `${this.format_fromdate}`,
        toDate: `${this.format_todate}`,
      };
      let result = await api.GetCarryList(data);
      this.data_set = result.data;
    },
    formatDate() {
      var days = 7;
      var date = new Date();
      var last = new Date(date.getTime() - days * 24 * 60 * 60 * 1000);
      const day = String(last.getDate()).padStart(2, "0");
      const month = String(last.getMonth() + 1).padStart(2, "0");
      var year = last.getFullYear();
      this.fromDate = year + "-" + month + "-" + day;
    },

    async onClickSearch() {
      const data = {
        emp_name: `%${this.search}%`,
        docst: `%${this.selectStatus}%`,
        fromDate: `${this.format_fromdate}`,
        toDate: `${this.format_todate}`,
      };
      let result = await api.GetCarryList(data);
      this.data_set = result.data;
    },
    shareData(id) {
      this.$router.push(`/carrydetail/${id}`);
    },
  },
  data() {
    return {
      format_fromdate: "",

      format_todate: "",

      fromDate: "",
      toDate: new Date().toISOString().substring(0, 10),
      search: "",
      selectStatus: "",
      status: [
        { text: "All", value: "" },
        { text: "Pending", value: "P" },
        { text: "Approved", value: "C" },
        { text: "Reject", value: "R" },
        { text: "Withdraw", value: "W" },
      ],
      data_set: [],
      headers: [
        {
          text: "No",
          value: "No",
          sortable: false,
          align: "center",
        },
        {
          text: "Doc.No",
          value: "No",
          sortable: false,
          align: "center",
        },
        {
          text: "Req.For",
          value: "No",
          sortable: false,
          align: "center",
        },
        {
          text: "Purpose",
          value: "No",
          sortable: false,
          align: "center",
        },
        {
          text: "Carrier",
          value: "No",
          sortable: false,
          align: "center",
        },
        {
          text: "Department",
          value: "No",
          sortable: false,
          align: "center",
        },
        {
          text: "Reg.Date",
          value: "No",
          sortable: false,
          align: "center",
        },
        {
          text: "Reg.By",
          value: "No",
          sortable: false,
          align: "center",
        },
        {
          text: "Status",
          value: "No",
          sortable: false,
          align: "center",
        },
      ],
    };
  },
  components: {},
};
</script>

<style></style>
