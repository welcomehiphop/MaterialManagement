<template>
  <div>
    <h2 class="mt-4">FE Room</h2>

    <v-container class="pa-10 mt-4">
      <v-row>
        <v-col>
          <div class="todos">
            <v-card class="todo pb-5">
              <v-card-title id="header">
                <v-layout justify-center align-center>
                  FE-01
                </v-layout>
              </v-card-title>
              <v-card
                class="item"
                v-for="(stock, key) in stocks"
                :key="key"
                :color="getColor(stock.location_code, getFeSpares)"
              >
                {{ stock.location_code }}
              </v-card>
            </v-card>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  components: {},
  async created() {
    await this.fetchStocks();
    await this.fetchFeSpares();
    this.stocks = this.getStocks;
  },
  methods: {
    getColor(location, status) {
      if (location == "StockA-01") {
        if(status == undefined) return "#909090"
        for(let i=0;i< status.length ;i++){
          if(status[i].status == 'NG') return "red"
          else return "green"
        }
      }
    },
    getSpareData(item) {
      console.log(item);
    },
    onClickStock(stock) {
      console.log(stock);
    },
    ...mapActions(["fetchStocks", "fetchFeSpares"]),
  },
  computed: mapGetters(["getStocks", "getFeSpares"]),

  data() {
    return {
      color: "",
      stocks: [],
      items: [
        { id: "1", param: "FE-01" },
        { id: "2", param: "FE-02" },
        { id: "3", param: "FE-03" },
        { id: "4", param: "FE-04" },
        { id: "5", param: "FE-05" },
      ],
    };
  },
};
</script>

<style scoped>
.container {
  margin-top: 50px;
}
.todos {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 2rem;
}
.todo {
  border: 1px solid black;
  background: white;
  border-radius: 5px;
  text-align: center;
  position: relative;
}
.item {
  border: 1px solid black;
  margin: 1rem;
  padding: 1rem;
  cursor: pointer;
}
</style>
