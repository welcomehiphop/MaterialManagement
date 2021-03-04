<template>
  <v-container>
    <h2>Location Register</h2>

    <v-form>
      <v-select
        v-model="form.selectPlant"
        :items="plants"
        item-text="plant"
        item-value="value"
        label="Plant *"
        persistent-hint
        return-object
        single-line
        required
      ></v-select>

      <v-text-field
        v-model="form.location_code"
        :counter="20"
        label="Location Code *"
        required
      ></v-text-field>

      <v-text-field
        v-model="form.location_name"
        label="Location Name * "
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
import api from '@/services/api'
export default {
  data() {
    return {
      form: {
        selectPlant: { plant: "Select Plant", value: "" },
        location_code: "",
        location_name: "",
      },
      plants: [
        { plant: "Select Plant", value: "" },
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
      event.preventDefault();
      const postLocation = {
        location_code: this.form.location_code,
        location_name: this.form.location_name,
        plant: this.form.selectPlant.value,
      };
      if (
        this.form.location_code != "" &&
        this.form.location_name != "" &&
        this.form.selectPlant.value != ""
      )
        await api.postITLocation(postLocation);
      // await axios
      //   .post("http://localhost:3000/post_location", postLocation)
      //   .then(
      //     () => {
      //       alert("Add success fully");
      //       this.$router.push("/locationdata");
      //     },
      //     (error) => {
      //       console.log(error);
      //     }
      //   );
    },
  },
};
</script>

<style scoped></style>
