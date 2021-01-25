<template>
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
      <v-list-group :value="true" no-action sub-group>
        <template v-slot:activator>
          <v-list-item-content>
            <v-list-item-title>Transaction</v-list-item-title>
          </v-list-item-content>
        </template>

        <v-list-item v-for="([title, icon,route], i) in transaction" :key="i"  @click="onClickMenu(route)">
          <v-list-item-title v-text="title"></v-list-item-title>
          <v-list-item-icon>
            <v-icon v-text="icon"></v-icon>
          </v-list-item-icon>
        </v-list-item>
      </v-list-group>

      <v-list-group :value="true" no-action sub-group>
        <template v-slot:activator>
          <v-list-item-content>
            <v-list-item-title>Master Data</v-list-item-title>
          </v-list-item-content>
        </template>

        <v-list-item v-for="([title, icon,route], i) in masterData" :key="i" @click="onClickMenu(route)">
          <v-list-item-title v-text="title"></v-list-item-title>
          <v-list-item-icon>
            <v-icon v-text="icon"></v-icon>
          </v-list-item-icon>
        </v-list-item>
      </v-list-group>

        <v-list-group :value="true" no-action sub-group>
        <template v-slot:activator>
          <v-list-item-content>
            <v-list-item-title>Monitoring</v-list-item-title>
          </v-list-item-content>
        </template>

        <v-list-item v-for="([title, icon,route], i) in monitoring" :key="i" @click="onClickMenu(route)">
          <v-list-item-title v-text="title"></v-list-item-title>
          <v-list-item-icon>
            <v-icon v-text="icon"></v-icon>
          </v-list-item-icon>
        </v-list-item>
      </v-list-group>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  data() {
    return {
      selectedItem: "",
      transaction: [
        ["Carry Out List", "mdi-text-box-multiple-outline",'/carryout'],
        ["In-Out Mgmt", "mdi-text-box-multiple-outline",'/inoutmanage'],
      ],
      masterData: [
        ["Mold Data", "mdi-text-box-multiple-outline",'/molddata'],
        ["Location Data", "mdi-text-box-multiple-outline",'/locationdata'],
      ],
      monitoring:[
        ["Mold Monitoring", "mdi-text-box-multiple-outline",'/monitoring'],
      ]
    };
  },
  methods: {
    onClickMenu(menu) {
      console.log(menu);
      this.$router.push(menu);
    },
  },
};
</script>

<style scoped>
.v-list-item-title {
  background: black;
}
.title {
  background: primary;
  font-size: 24px !important;
  /* background: black; */
}
</style>
