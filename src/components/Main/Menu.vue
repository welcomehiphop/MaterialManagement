<template>
  <v-navigation-drawer permanent>

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

        <v-list-item v-for="([title, icon], i) in transaction" :key="i" link>
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

        <v-list-item v-for="([title, icon], i) in masterData" :key="i" link>
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

        <v-list-item v-for="([title, icon], i) in monitoring" :key="i" link>
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
        ["Carry Out List", "mdi-text-box-multiple-outline"],
        ["In-Out Mgmt", "mdi-text-box-multiple-outline"],
      ],
      masterData: [
        ["Mold Data", "mdi-text-box-multiple-outline"],
        ["Location Data", "mdi-text-box-multiple-outline"],
      ],
      monitoring:[
        ["Mold Monitoring", "mdi-text-box-multiple-outline"],
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
