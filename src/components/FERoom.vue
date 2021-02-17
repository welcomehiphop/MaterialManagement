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

            <v-card class="todo pb-5">
              <v-card-title id="header">
                <v-layout justify-center align-center>
                  FE-02
                </v-layout>
              </v-card-title>
              <v-card
                class="item"
                v-for="(stock, key) in stockB"
                :key="key"
                :color="getColor(stock.location_code, sparesB)"
              >
                {{ stock.location_code }}
              </v-card>
            </v-card>

            <v-card class="todo pb-5">
              <v-card-title id="header">
                <v-layout justify-center align-center>
                  FE-03
                </v-layout>
              </v-card-title>
              <v-card
                class="item"
                v-for="(stock, key) in stockC"
                :key="key"
                :color="getColor(stock.location_code, sparesC)"
              >
                {{ stock.location_code }}
              </v-card>
            </v-card>

            <v-card class="todo pb-5">
              <v-card-title id="header">
                <v-layout justify-center align-center>
                  FE-04
                </v-layout>
              </v-card-title>
              <v-card
                class="item"
                v-for="(stock, key) in stockD"
                :key="key"
                :color="getColor(stock.location_code, sparesD)"
              >
                {{ stock.location_code }}
              </v-card>
            </v-card>

            <v-card class="todo pb-5">
              <v-card-title id="header">
                <v-layout justify-center align-center>
                  FE-05
                </v-layout>
              </v-card-title>
              <v-card
                class="item"
                v-for="(stock, key) in stockE"
                :key="key"
                :color="getColor(stock.location_code, sparesE)"
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
import api from "@/services/api";
import { mapGetters, mapActions } from "vuex";
export default {
  components: {},
  async created() {
    let result = await api.getFeRoom("%StockB%");
    this.stockB = result.data;
    let result2 = await api.getFeSpare("%StockB%");
    this.sparesB = result2.data;

    let result3 = await api.getFeRoom("%StockC%");
    this.stockC = result3.data;
    let result4 = await api.getFeSpare("%StockC%");
    this.sparesC = result4.data;

    let result5 = await api.getFeRoom("%StockD%");
    this.stockD = result5.data;
    let result6 = await api.getFeSpare("%StockD%");
    this.sparesD = result6.data;

    let result7 = await api.getFeRoom("%StockE%");
    this.stockE = result7.data;
    let result8 = await api.getFeSpare("%StockE%");
    this.sparesE = result8.data;

    await this.fetchStocks();
    await this.fetchFeSpares();
    this.stocks = this.getStocks;
  },
  methods: {
    getColor(location, status) {
      let count = 0;
      for (let i = 0; i < status.length; i++) {
        if (status[i].location_code == location) {
          if (status[i].status === "NULL" || status[i].status == 0) return "#909090";
          else if (status[i].status == "NG") return "red";
          else if (status[i].status == "OK") return "green";
        }
      }
      console.log(count);
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
      stockB: [],
      sparesB: [],
      sparesC: [],
      stockC: [],
      sparesD: [],
      stockD: [],
      sparesE: [],
      stockE: [],
      stocks: [],
      items: [
        { id: "1", param: "FE-01" },
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
