<template>
  <v-card class="elevation-5 mt-5 px-5">
    <v-row align="center">
      <v-col cols="1">
        <v-subheader>
          <div class="search">Part Code: </div>
        </v-subheader>
      </v-col>
      <v-col cols="3">
        <v-text-field
          class="mb-4"
          v-model="search"
          append-icon="mdi-magnify"
          label="Search"
          single-line
          hide-details
        ></v-text-field>
      </v-col>
      <v-col cols="1"></v-col>
      <v-col cols="1">
        <v-subheader>
          <div class="search">Plant:</div>
        </v-subheader>
      </v-col>
      <v-col cols="3">
        <v-select
          v-model="selectPlant"
          :items="plants"
          item-text="plant"
          item-value="value"
          label="Select Plant"
          persistent-hint
          return-object
          single-line
        ></v-select>
      </v-col>
      <v-spacer></v-spacer>
      <v-col cols="1" class="mr-10">
        <v-btn>
          Search
        </v-btn>
      </v-col>
      <v-col cols="1">
        <v-btn class="pa-5" href="/addspare" color="success">
          ADD
        </v-btn>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      search: "",
      selectPlant: "",
      plants: [
        {plant: "Select Plant",value:"undefined"},
        { plant: "KS", value: "KS" },
        { plant: "A/C", value: "AC" },
        { plant: "DW", value: "DW" },
        { plant: "PBA", value: "PBA" },
        { plant: "REF", value: "REF" },
        { plant: "W/M", value: "WM" },
      ],
    };
  },
};
</script>

<style scoped></style>
