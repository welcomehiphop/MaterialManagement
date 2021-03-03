<template>
  <v-container>
    <h2>Location Detail</h2>
    <form>
      <div v-for="(list, id) in data_set" :key="id" class="mt-5">
        <v-select
          v-model="list.plant"
          :items="plants"
          item-text="plant"
          item-value="value"
          :key="id + 1"
          label="Plant * "
          disabled
        >
        </v-select>
        <v-text-field
          v-model="list.location_code"
          :key="id + 2"
          label="Location Code * "
          disabled
        >
        </v-text-field>
        <v-text-field
          v-model="list.location_name"
          :key="id + 3"
          label="Location Name * "
        >
        </v-text-field>
        <div class="text-right">
          <v-btn
            color="success"
            class="mt-10 pa-5 pr-9 pl-9"
            @click="updateData(list.id)"
            >Update</v-btn
          >
        </div>
      </div>
    </form>
  </v-container>
</template>

<script>
import api from "@/services/api";
export default {
  async mounted() {
    let result = await api.getLocaitonDataByID(this.$route.params.id);
    this.data_set = result.data;
  },
  data() {
    return {
      data_set: [],
      plants: [
        { plant: "Select Plant", value: "undefined" },
        { plant: "KS", value: "KS" },
        { plant: "A/C", value: "AC" },
        { plant: "DW", value: "DW" },
        { plant: "PBA", value: "PBA" },
        { plant: "REF", value: "REF" },
        { plant: "W/M", value: "WM" },
      ],
    };
  },
  methods: {
    async updateData(id) {
      const data = {
        location_name: this.data_set[0].location_name,
      };

      await api.putLocationData(id, data);
      // axios
      //   .put(
      //     "http://localhost:3000/update_location/" + id,
      //     {
      //       location_name: this.data_set[0].location_name,
      //     }
      //   )
      //   .then((resp) => {
      //     if (resp.status == "200") {
      //       alert("SUCCESS");
      //       this.$router.push({ path: "/locationdata" });
      //     }
      //   });
    },
  },
};
</script>

<style scoped></style>
