<template>
  <div>
    <h2 class="mt-4">FE Room</h2>
    <!-- {{ getStocks }} -->
    <v-container class="pa-10 mt-4">
      <v-row>
        <v-col>
          <div class="todos">
            <v-card
              class="todo pb-5"
              v-for="(item, index) in items"
              :key="index"
            >
              <v-card-title id="header">
                <v-layout justify-center align-center>
                  {{ item.param }}
                </v-layout>
              </v-card-title>
              <v-card
                :color="getColor(stock.qty, stock.safe_stock)"
                class="item"
                v-for="(stock, key) in stocks[index]"
                :key="key"
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
import { mapGetters,mapActions } from "vuex";
export default {
  async mounted() {
    await this.fetchStocks();
    this.stocks.push(this.getStocks)
  },
  methods: {
    ...mapActions(["fetchStocks"]),
    onClick(item) {
      console.log(item);
    },
    getColor(total, safeStock) {
      if (total == undefined || safeStock == undefined) return "#909090";
      if (total >= safeStock) return "green";
      else if (total < safeStock) return "red";
    },
  },
  computed: mapGetters(["getStocks"]),

  data() {
    return {
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
