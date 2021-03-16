<template>
  <v-container>
    <v-toolbar>
      <img src="@/assets/web-maintenance.png" width="50" height="50" alt="" />
      <h1>Equipment & IT Room control</h1>
    </v-toolbar>

    <v-card width="50%">
      <v-system-bar height="2" dark></v-system-bar>
    </v-card>
    <v-navigation-drawer app permanent>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title">
            Menu
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider dark></v-divider>

      <v-list dense nav>
        <v-list-group :value="true" no-action sub-group disabled>
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title>Transaction</v-list-item-title>
            </v-list-item-content>
          </template>

          <v-list-item
            v-for="([title, icon, route], i) in transaction"
            :key="i"
            @click="onClickMenu(route)"
          >
            <v-list-item-title v-text="title"></v-list-item-title>
            <v-list-item-icon>
              <v-icon v-text="icon"></v-icon>
            </v-list-item-icon>
          </v-list-item>
        </v-list-group>

        <v-list-group :value="true" no-action sub-group disabled>
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title>Master Data</v-list-item-title>
            </v-list-item-content>
          </template>

          <v-list-item
            v-for="([title, icon, route], i) in masterData"
            :key="i"
            @click="onClickMenu(route)"
          >
            <v-list-item-title v-text="title"></v-list-item-title>
            <v-list-item-icon>
              <v-icon v-text="icon"></v-icon>
            </v-list-item-icon>
          </v-list-item>
        </v-list-group>

        <v-list-group :value="true" no-action sub-group disabled>
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title>Monitoring</v-list-item-title>
            </v-list-item-content>
          </template>

          <v-list-item
            v-for="([title, icon, route], i) in monitoring"
            :key="i"
            @click="onClickMenu(route)"
          >
            <v-list-item-title v-text="title"></v-list-item-title>
            <v-list-item-icon>
              <v-icon v-text="icon"></v-icon>
            </v-list-item-icon>
          </v-list-item>
        </v-list-group>
      </v-list>
    </v-navigation-drawer>
    <router-view></router-view>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      selectedItem: "",
      transaction: [
        [
          "Carry Out List",
          "mdi-text-box-multiple-outline",
          "/esrc/itroom/carryout",
        ],
        ["In-Out Mgmt", "mdi-text-box-multiple-outline", "/esrc/itroom/inout"],
      ],
      masterData: [
        ["Mold Data", "mdi-text-box-multiple-outline", "/esrc/itroom/molddata"],
        [
          "Location Data",
          "mdi-text-box-multiple-outline",
          "/esrc/itroom/locationdata",
        ],
      ],
      monitoring: [
        [
          "Stock Overview",
          "mdi-text-box-multiple-outline",
          "/esrc/itroom/stockview",
        ],

        [
          "Mold Monitoring",
          "mdi-text-box-multiple-outline",
          "/esrc/itroom/monitoring",
        ],
      ],
    };
  },
  methods: {
    onClickMenu(menu) {
      this.$router.push(menu).catch(() => {});
    },
  },
};
</script>

<style scoped>
h1{
  margin: 0 0 0 20px;
}
.v-list-item-title {
  background: black;
}
.title {
  background: primary;
  font-size: 24px !important;
  /* background: black; */
}
</style>
