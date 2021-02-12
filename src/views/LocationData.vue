<template>
  <v-container>
    <h1>Location Data</h1>
    <SearchLocation />

    <v-card class="mx-auto mt-10" width="600px">
      <v-data-table
        :headers="headers"
        :items="data_set"
        item-key="name"
        class="elevation-1"
        :footer-props="{
          'items-per-page-options': [10, 20, 30, 40],
        }"
        :items-per-page="20"
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
                    src="../assets/edit.png"
                    height="25px"
                    width="25px"
                    alt="Image not found"
                /></a>
                <a href="javascript:;" class="ml-3"
                  ><img
                    @click="onDelete(item.id)"
                    src="../assets/empty-tash-can.png"
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
import SearchLocation from "../components/SearchLocation";
export default {
  async mounted() {
    const result = await api.getLocation();
    this.data_set = result;
  },
  data() {
    return {
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
  components: {
    SearchLocation,
  },
  methods: {
    ShareData(id){
      this.$router.push(`/editlocation/${id}`);
    },
    async onDelete(id) {
      if (confirm("Do you really want to delete?")) {
        await api
          .deleteLocation(id)
          .then((resp) => {
            alert(resp);
          })
          .catch((error) => {
            alert(error);
          });
      }
      this.data_set = await api.getLocation();
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
