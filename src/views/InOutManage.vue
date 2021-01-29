<template>
  <v-container>
    <h1>In-Out Management</h1>
    <SearchIO/>
    <v-card class elevation="2 mt-5">
      <v-data-table
        dense
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
            <td>{{data_set.map(function(x) {return x.id; }).indexOf(item.id) + 1}}</td>
            <td>{{ item.spare_code }}</td>
            <td>{{ item.movement }}</td>
            <td>{{ item.spare_name }}</td>
            <td>{{ item.locaiton }}</td>
            <td>{{ item.qty }}</td>
            <td>{{ item.reg_name }}</td>
            <td>{{ item.reg_date }}</td>
            <td>{{ item.plant }}</td>
          </tr>
        </template>
      </v-data-table>
    </v-card>
  </v-container>
</template>

<script>
import SearchIO from '../components/SearchIO'
export default {
  name: "Home",
  components: {
    SearchIO
  },
  data() {
    return {
      data_set: [],
      headers: [
        { text: "No", value: "No", sortable: false },
        { text: "Spare Code", value: "spare_code", sortable: false },
        { text: "Movement", value: "movement", sortable: false },
        { text: "Spare Name", value: "spare_name", sortable: false },
        { text: "Location", value: "location", sortable: false },
        { text: "Qty", value: "qty", sortable: false },
        { text: "Reg.Name", value: "reg_name", sortable: false },
        { text: "Reg.Date", value: "reg_date", sortable: false },
        { text: "Plant", value: "plant", sortable: false },
      ],
    };
  },
};
</script>
