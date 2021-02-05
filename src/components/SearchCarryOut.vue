<template>
  <v-card class="elevation-5 mt-5 px-5">
    <v-row align="center">
      <v-col cols="1">
        <v-subheader>
          <div class="search">Requester:</div>
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
          <div class="search">Reg Date :</div>
        </v-subheader>
      </v-col>
      <v-col cols="2">
        <v-menu offset-y>
          <template v-slot:activator="{ on, attrs }">
            <v-text-field
              v-model="form.fromDate"
              label="From * "
              v-bind="attrs"
              v-on="on"
              readonly
              prepend-icon="mdi-calendar-month-outline"
            />
          </template>
          <v-date-picker v-model="form.fromDate"></v-date-picker>
        </v-menu>
      </v-col>
      <v-col cols="2">
        <v-menu offset-y>
          <template v-slot:activator="{ on, attrs }">
            <v-text-field
              v-model="form.toDate"
              label="To * "
              v-bind="attrs"
              v-on="on"
              readonly
              prepend-icon="mdi-calendar-month-outline"
            />
          </template>
          <v-date-picker v-model="form.toDate"></v-date-picker>
        </v-menu>
      </v-col>
      <v-col cols="1">
        <v-subheader>
          <div class="search">Status:</div>
        </v-subheader>
      </v-col>
      <v-col cols="1">
        <v-select
          v-model="selectPlant"
          :items="status"
          item-text="text"
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
    </v-row>
    <v-row>
      <v-col cols="10"></v-col>
      <v-col cols="2">
        <div class="text-right mr-3 mb-2">
          <v-btn href="/requestcarry" color="success">
            Request
          </v-btn>
        </div>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      form: {
        fromDate: "",
        toDate: "",
      },
      search: "",
      selectMovement: { movement: "All", value: "All" },
      selectPlant: { plant: "All", value: "All" },
      status: [
        { text: "All", value: "All" },
        { text: "Pending", value: "Pending" },
        { text: "Approved", value: "Approved" },
        { text: "Reject", value: "Reject" },
        { text: "Withdrawn", value: "Withdrawn" },
      ],
    };
  },
};
</script>

<style></style>
