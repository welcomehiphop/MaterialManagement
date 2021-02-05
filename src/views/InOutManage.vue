<template>
  <v-container>
    <h1>In-Out Management</h1>
    <SearchIO />
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
            <v-layout justify-center>{{ item.reg_empno }}</v-layout>
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
                  src="../assets/reviews.png"
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
import api from "@/services/api";
import SearchIO from "../components/SearchIO";
export default {
  async mounted() {
    const result = await api.getInout();
    this.data_set = result;
  },
  name: "Home",
  components: {
    SearchIO,
  },
  data() {
    return {
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
    ShareData(id, movement) {
      if (movement === "GI") {
        console.log("GI");
        this.$router.push(`/detailgi/${id}`);
      } else {
        this.$router.push(`/detailgr/${id}`);
        console.log("GR");
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
