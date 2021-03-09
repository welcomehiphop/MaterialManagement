<template>
  <v-container fill-height>
    <v-row class="mb-15">
      <v-col cols="12" md="4" sm="12">
        <v-hover v-slot:default="{ hover }">
          <v-card
            class="pa-2"
            href="/esrc/fe/inout"
            :class="{ 'on-hover': hover }"
            :elevation="hover ? 16 : 4"
          >
            <v-card-title>FE Room control</v-card-title>
            <v-card-text>FE Room control</v-card-text>
          </v-card>
        </v-hover>
      </v-col>
      <v-col sm="12" cols="12" md="4">
        <v-hover v-slot:default="{ hover }">
          <v-card
            class="pa-2"
            href="/esrc/ppe/inout"
            :class="{ 'on-hover': hover }"
            :elevation="hover ? 16 : 4"
          >
            <v-card-title>Safety & PPE Room control</v-card-title>
            <v-card-text>Safety & PPE Room control</v-card-text>
          </v-card>
        </v-hover>
      </v-col>
      <v-col sm="12" md="4" cols="12">
        <v-hover v-slot:default="{ hover }">
          <v-card
            class="pa-2"
            href="/esrc/it/inout"
            :class="{ 'on-hover': hover }"
            :elevation="hover ? 16 : 4"
          >
            <v-card-title>Equipment & IT Room control</v-card-title>
            <v-card-text>Equipment & IT Room control</v-card-text>
          </v-card>
        </v-hover>
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
