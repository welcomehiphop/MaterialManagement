<template>
  <v-container>
    <h1 class="mt-5">In-Out Management</h1>

    <v-card elevation="2">
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
export default {
  name: "Home",
  components: {},
  data() {
    return {
      data_set: [
        {
          id:6,
          spare_code: 2,
          movement: 3,
          spare_name: 4,
          location: 5,
          qty: 6,
          reg_name: 7,
          reg_date: 8,
          plant: 9,
        },
      ],
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
