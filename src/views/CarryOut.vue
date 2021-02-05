<template>
  <v-container>
    <h1>Carry Out</h1>
    <SearchCarryOut/>
    <v-card class elevation="2 ma-10">
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
          </tr>
        </template>
      </v-data-table>
    </v-card>
  </v-container>
</template>

<script>
import SearchCarryOut from '../components/SearchCarryOut'
export default {
  data() {
    return {
      data_set: [],
      headers: [
        { text: "No", value: "No", sortable: false },
        { text: "Doc.No", value: "No", sortable: false },
        { text: "Req.For", value: "No", sortable: false },
        { text: "Purpose", value: "No", sortable: false },
        { text: "Carrier", value: "No", sortable: false },
        { text: "Department", value: "No", sortable: false },
        { text: "Reg.Date", value: "No", sortable: false },
        { text: "Reg.By", value: "No", sortable: false },
        { text: "Status", value: "No", sortable: false },
      ],
    };
  },
  components: {
    SearchCarryOut
  },
};
</script>

<style></style>
