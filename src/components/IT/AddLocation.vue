<template>
  <v-container>
    <h2>Location Register</h2>

    <v-form ref="form" v-model="valid" lazy-validation>
      <v-select
        v-model="form.selectPlant"
        :items="plants"
        item-text="plant"
        item-value="value"
        label="Plant *"
        persistent-hint
        return-object
        :rules="plantRules"
        required
      ></v-select>

      <v-text-field
        v-model="form.location_code"
        :counter="20"
        label="Location Code *"
        :rules="locationCodeRules"
        required
      ></v-text-field>

      <v-text-field
        v-model="form.location_name"
        label="Location Name * "
        required
        :rules="locationNameRules"
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
import api from "@/services/api";
export default {
  data() {
    return {
      //Validate part
      valid: true,
      plantRules: [(v) => !!v || "Plant is required"],
      locationCodeRules: [(v) => !!v || "Spare code is required"],
      locationNameRules: [(v) => !!v || "Spare Name is required"],
      form: {
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
        const postLocation = {
          location_code: this.form.location_code,
          location_name: this.form.location_name,
          plant: this.form.selectPlant.value,
        };
        await api.postITLocation(postLocation);
      }
      event.preventDefault();

      // if (
      //   this.form.location_code != "" &&
      //   this.form.location_name != "" &&
      //   this.form.selectPlant.value != ""
      // )
      // console.log(postLocation)
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
