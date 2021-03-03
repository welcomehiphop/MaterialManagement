<template>
  <v-container fill-height>
    <v-row class="mb-15">
      <v-col>
        <v-card class="pa-2">
          <v-btn href="/inoutmanage" text>
            <v-card-title>FE Room control</v-card-title>
          </v-btn>
           <v-card-text>FE Room control</v-card-text>
        </v-card>
      </v-col>
      <v-col>
        <v-card class="pa-2">
          <v-btn href="/ppe/inout" text>
            Safety & PPE Room control
          </v-btn>
        </v-card>
      </v-col>
      <v-col>
        <v-card class="pa-2">
          <v-btn href="" text>
            Equipment & IT Room control
          </v-btn>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {};
  },
  components: {},
};
</script>

<style scoped></style>
