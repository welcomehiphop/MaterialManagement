<template>
  <v-container>
    <Loading :start="loading" />
    <h2>Location Register</h2>
    <v-form ref="form" v-model="valid" lazy-validation>
      <v-select
        v-model="form.selectPlant"
        :items="plants"
        item-text="plant"
        item-value="value"
        persistent-hint
        return-object
        :rules="[(v) => !!v || 'Plant is required']"
        label="Plant *"
        required
      ></v-select>

      <v-text-field
        v-model="form.location_code"
        :counter="20"
        :rules="[(v) => !!v || 'Location code is required']"
        label="Location Code *"
        required
      ></v-text-field>

      <v-text-field
        v-model="form.location_name"
        label="Location Name * "
        :rules="[(v) => !!v || 'Location name is required']"
        required
      ></v-text-field>

      <div class="text-right">
        <v-btn color="success" class="mt-10 pa-5 pr-9 pl-9" @click="submit">
          Submit
        </v-btn>
      </div>
    </v-form>
  </v-container>
</template>

<script>
import Loading from "@/components/Loading";
import api from "@/services/api";
export default {
  components: {
    Loading,
  },
  data() {
    return {
      loading: false,
      valid: true,
      form: {
        selectPlant: "",
        location_code: "",
        location_name: "",
      },
      plants: [
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
    async submit(event) {
      if (this.$refs.form.validate()) {
        this.loading = true;
        const postLocation = {
          location_code: this.form.location_code,
          location_name: this.form.location_name,
          plant: this.form.selectPlant.value,
        };
        await api.postLocation(postLocation);
        this.loading = false;
      }
      event.preventDefault();
    },
  },
};
</script>

<style scoped></style>
