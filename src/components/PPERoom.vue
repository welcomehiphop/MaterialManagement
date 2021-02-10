<template>
  <div>
    <h2 class="mt-4">FE Room</h2>
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
                :color="getColor(stock.total, stock.safeStock)"
                class="item"
                v-for="(stock, key) in stocks[index]"
                :key="key"
              >
                {{ stock.stock }}
              </v-card>
            </v-card>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  methods: {
    onClick(item) {
      console.log(item);
    },
    getColor(total, safeStock) {
      if (total == undefined || safeStock == undefined) return "#909090";
      if (total >= safeStock) return "green";
      else if (total < safeStock) return "red";
    },
  },
  data() {
    return {
      stocks: [
        [
          { id: "1", stock: "StockA-1", total: 5, safeStock: 5 },
          { id: "2", stock: "StockA-2", total: 1, safeStock: 4 },
          { id: "3", stock: "StockA-3" },
          { id: "4", stock: "StockA-4" },
          { id: "5", stock: "StockA-5" },
          { id: "6", stock: "StockA-6" },
        ],
        [
          { id: "1", stock: "StockB-1" },
          { id: "2", stock: "StockB-2" },
          { id: "3", stock: "StockB-3" },
          { id: "4", stock: "StockB-4" },
          { id: "5", stock: "StockB-5" },
          { id: "6", stock: "StockB-6" },
        ],
        [
          { id: "1", stock: "StockB-1" },
          { id: "2", stock: "StockB-2" },
          { id: "3", stock: "StockB-3" },
          { id: "4", stock: "StockB-4" },
          { id: "5", stock: "StockB-5" },
          { id: "6", stock: "StockB-6" },
        ],
        [
          { id: "1", stock: "StockB-1" },
          { id: "2", stock: "StockB-2" },
          { id: "3", stock: "StockB-3" },
          { id: "4", stock: "StockB-4" },
          { id: "5", stock: "StockB-5" },
          { id: "6", stock: "StockB-6" },
        ],
        [
          { id: "1", stock: "StockB-1" },
          { id: "2", stock: "StockB-2" },
          { id: "3", stock: "StockB-3" },
          { id: "4", stock: "StockB-4" },
          { id: "5", stock: "StockB-5" },
          { id: "6", stock: "StockB-6" },
        ],
      ],
      items: [
        { id: "1", param: "PPE-01" },
        { id: "2", param: "PPE-02" },
        { id: "3", param: "PPE-03" },
        { id: "4", param: "PPE-04" },
        { id: "5", param: "PPE-05" },
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
