<template>
  <v-container fill-height>
    <v-row class="mb-15">
      <v-col cols="12" md="4" sm="12">
        <v-hover v-slot:default="{ hover }">
          <v-card
            class="pa-2"
            href="/esrc/feroom/inout"
            :class="{ 'on-hover': hover }"
            :elevation="hover ? 16 : 4"
          >
            <v-card-title>FE Room control</v-card-title>
            <v-card-text>
              <v-row>
                <v-col cols="8">
                  FE Room control
                </v-col>
                <v-col cols="4">
                  <img
                    src="@/assets/settings.png"
                    width="80px"
                    height="80px"
                    alt=""
                  />
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-hover>
      </v-col>
      <v-col sm="12" cols="12" md="4">
        <v-hover v-slot:default="{ hover }">
          <v-card
            class="pa-2"
            href="/esrc/pperoom/inout"
            :class="{ 'on-hover': hover }"
            :elevation="hover ? 16 : 4"
          >
            <v-card-title>Safety & PPE Room control</v-card-title>
            <v-card-text>
              <v-row>
                <v-col cols="8">
                  Safety & PPE Room control
                </v-col>
                <v-col cols="4">
                  <img
                    src="@/assets/worker.png"
                    width="80px"
                    height="80px"
                    alt=""
                  />
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-hover>
      </v-col>
      <v-col sm="12" md="4" cols="12">
        <v-hover v-slot:default="{ hover }">
          <v-card
            class="pa-2"
            href="/esrc/itroom/inout"
            :class="{ 'on-hover': hover }"
            :elevation="hover ? 16 : 4"
          >
            <v-card-title>Equipment & IT Room control</v-card-title>
            <v-card-text>
              <v-row>
                <v-col cols="8">
                  Equipment & IT Room control
                </v-col>
                <v-col cols="4">
                  <img
                    src="@/assets/web-maintenance.png"
                    width="80px"
                    height="80px"
                    alt=""
                  />
                </v-col>
              </v-row>
            </v-card-text>
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
