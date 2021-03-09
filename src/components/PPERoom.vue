<template>
  <div>
    <div class="text-center">
      <h2 class="mt-4">FE Room Monitor</h2>
    </div>
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
                v-for="(stock, key) in stockA"
                :key="key"
                :color="getColor(stock.location_code, sparesA)"
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
export default {
  components: {},
  async created() {
    const r1 = await api.getPPERoom("StockA");
    this.stockA = r1.data;
    const r2 = await api.getPPEMonitor("stockA");
    this.sparesA = r2.data;

    let result = await api.getPPERoom("StockB");
    this.stockB = result.data;
    let result2 = await api.getPPEMonitor("StockB");
    this.sparesB = result2.data;

    let result3 = await api.getPPERoom("StockC");
    this.stockC = result3.data;
    let result4 = await api.getPPEMonitor("StockC");
    this.sparesC = result4.data;

    let result5 = await api.getPPERoom("StockD");
    this.stockD = result5.data;
    let result6 = await api.getPPEMonitor("StockD");
    this.sparesD = result6.data;

    let result7 = await api.getPPERoom("StockE");
    this.stockE = result7.data;
    let result8 = await api.getPPEMonitor("StockE");
    this.sparesE = result8.data;

  },
  methods: {
    getColor(location, status) {
      for (let i = 0; i < status.length; i++) {
        if (status[i].location_code == location) {
          if (status[i].status === "NULL" || status[i].status == 0)
            return "#909090";
          else if (status[i].status == "NG") return "red";
          else if (status[i].status == "OK") return "green";
        }
      }
    },
    getSpareData(item) {
      console.log(item);
    },
    onClickStock(stock) {
      console.log(stock);
    },
  },

  data() {
    return {
      color: "",
      stockA: [],
      sparesA: [],
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
