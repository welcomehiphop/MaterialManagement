<template>
  <v-card class="elevation-5 mt-5 px-5">
    <v-row align="center">
      <v-col cols="1">
        <v-subheader>
          <div class="search">Spare Code:</div>
        </v-subheader>
      </v-col>
      <v-col cols="2">
        <v-text-field
          class="mb-4"
          v-model="search"
          append-icon="mdi-magnify"
          label="Search"
          single-line
          hide-details
        ></v-text-field>
      </v-col>
      <v-col cols="1">
        <v-subheader>
          <div class="search">Movement:</div>
        </v-subheader>
      </v-col>
      <v-col cols="1">
        <v-select
          v-model="selectMovement"
          :items="movements"
          item-text="movement"
          item-value="value"
          label="Select Plant"
          persistent-hint
          return-object
          single-line
        ></v-select>
      </v-col>
      <v-col cols="1">
        <v-subheader>
          <div class="search">Plant:</div>
        </v-subheader>
      </v-col>
      <v-col cols="1">
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
        <v-btn class="elevation-5">
          Search
        </v-btn>
      </v-col>
      <v-col cols="2">
        <v-btn class="pa-6 mr-5" href="/addgr" color="primary">
          GR
        </v-btn>
        <v-btn class="pa-6" href="/addgi" color="primary">
          GI
        </v-btn>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      search:'',
      selectMovement: { movement: "All", value: "All" },
      selectPlant: { plant: "All", value: "All" },
      plants: [
        { plant: "All", value: "All" },
        { plant: "A/C", value: "AC" },
        { plant: "DW", value: "DW" },
        { plant: "KS", value: "KS" },
        { plant: "PBA", value: "PBA" },
        { plant: "REF", value: "REF" },
        { plant: "W/M", value: "WM" },
      ],
      movements: [
        { movement: "All", value: "All" },
        { movement: "GI", value: "GI" },
        { movement: "GR", value: "GR" },
      ],
    };
  },
};
</script>

<style></style>
