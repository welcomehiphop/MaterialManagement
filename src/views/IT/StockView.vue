<template>
  <v-container>
    <Loading :start="loading" />
    <div class="text-center">
      <h1>Stock Overview</h1>
    </div>
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
            <v-layout justify-center> {{ item.type }}</v-layout>
          </td>
          <td>
            <v-layout justify-center> {{ item.description }}</v-layout>
          </td>
          <td>
            <v-layout justify-center> {{ item.qty }}</v-layout>
          </td>
          <td>
            <v-layout justify-center> {{ item.location_code }}</v-layout>
          </td>
          <td>
            <v-layout justify-center>
              {{
                new Intl.NumberFormat("th-TH", {
                  style: "currency",
                  currency: "THB",
                }).format(item.price)
              }}</v-layout
            >
          </td>
          <td>
            <v-layout justify-center>
              {{
                new Intl.NumberFormat("th-TH", {
                  style: "currency",
                  currency: "THB",
                }).format(item.price * item.qty)
              }}</v-layout
            >
          </td>
          <td>
            <v-layout justify-center> {{ item.plant }}</v-layout>
          </td>
        </tr>
      </template>
    </v-data-table>
  </v-container>
</template>

<script>
import Loading from "@/components/Loading";
import api from "@/services/api";
export default {
  components: {
    Loading,
  },
  async mounted() {
    this.loading = true;
    const response = await api.getITStockView();
    this.data_set = response;
    this.loading = false;
  },
  data() {
    return {
      loading: false,
      data_set: [],
      headers: [
        { text: "No", value: "no", sortable: false, align: "center" },
        {
          text: "Spare Code",
          value: "spare_code",
          sortable: false,
          align: "center",
        },
        {
          text: "Spare Type",
          value: "spare_type",
          sortable: false,
          align: "center",
        },
        {
          text: "Spare Name",
          value: "spare_name",
          sortable: false,
          align: "center",
        },
        { text: "Stock Qty", value: "qty", sortable: false, align: "center" },
        {
          text: "Location",
          value: "location",
          sortable: false,
          align: "center",
        },
        {
          text: "Unit Price",
          value: "unit_price",
          sortable: false,
          align: "center",
        },
        { text: "Amount", value: "amount", sortable: false, align: "center" },
        { text: "Plant", value: "plant", sortable: false, align: "center" },
      ],
    };
  },
};
</script>

<style></style>
