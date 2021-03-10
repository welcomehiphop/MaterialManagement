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
                v-for="(stock, key) in stocks"
                :key="key"
                :color="getColor(stock.location_code, getFeSpares)"
                @click="getItem(stock.location_code)"
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
                @click="getItem(stock)"
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
                @click="getItem(stock.location_code)"
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
                @click="getItem(stock.location_code)"
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
                @click="getItem(stock.location_code)"
              >
                {{ stock.location_code }}
              </v-card>
            </v-card>
          </div>
        </v-col>
      </v-row>

      <!-- dialog view stock -->
      <v-row justify="center">
        <v-dialog v-model="dialog" max-width="800px" scrollable>
          <v-card class="pa-10">
            <h2>Fe Room Monitoring</h2>
            <v-data-table
              dense
              :headers="headers"
              :items="data_set"
              item-key="name"
              class="elevation-1 row-pointer"
              :items-per-page="6"
            >
              <template v-slot:item="{ item }">
                <tr @click="onClick(item)">
                  <td>
                    <v-layout justify-center>
                      {{
                        data_set
                          .map(function(x) {
                            return x.id;
                          })
                          .indexOf(item.id) + 1
                      }}
                    </v-layout>
                  </td>
                  <td>
                    <v-layout justify-center>
                      {{ item.spare_code }}
                    </v-layout>
                  </td>
                  <td>
                    <v-layout justify-center>
                      {{ item.type }}
                    </v-layout>
                  </td>
                  <td>
                    <v-layout justify-center>
                      {{ item.description }}
                    </v-layout>
                  </td>
                  <td>
                    <v-layout justify-center>
                      {{ item.qty }}
                    </v-layout>
                  </td>
                  <td>
                    <v-layout justify-center>
                      {{ item.location_code }}
                    </v-layout>
                  </td>
                  <td>
                    <v-layout justify-center>
                      <img
                        :src="imageUrl + item.picture"
                        alt="Image not found"
                        width="80px"
                        height="80px"
                      />
                    </v-layout>
                  </td>
                </tr>
              </template>
            </v-data-table>

            <v-btn class="mt-5" color="primary" @click.stop="dialog = false"
              >Close</v-btn
            >
          </v-card>
        </v-dialog>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import api from "@/services/api";
import { imageUrl } from "@/services/constants";
import { mapGetters, mapActions } from "vuex";
export default {
  components: {},
  async created() {
    let result = await api.getFeRoom("StockB");
    this.stockB = result.data;
    let result2 = await api.getFeSpare("StockB");
    this.sparesB = result2.data;

    let result3 = await api.getFeRoom("StockC");
    this.stockC = result3.data;
    let result4 = await api.getFeSpare("StockC");
    this.sparesC = result4.data;

    let result5 = await api.getFeRoom("StockD");
    this.stockD = result5.data;
    let result6 = await api.getFeSpare("StockD");
    this.sparesD = result6.data;

    let result7 = await api.getFeRoom("StockE");
    this.stockE = result7.data;
    let result8 = await api.getFeSpare("StockE");
    this.sparesE = result8.data;

    await this.fetchStocks();
    await this.fetchFeSpares();
    this.stocks = this.getStocks;
  },
  methods: {
    async getItem(item) {
      const condition = {
        location: item,
        plant: "",
      };
      const result = await api.getFeStockClick(condition);
      this.data_set = result;
      this.dialog = true;
    },
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
    ...mapActions(["fetchStocks", "fetchFeSpares"]),
  },
  computed: mapGetters(["getStocks", "getFeSpares"]),

  data() {
    return {
      imageUrl: imageUrl,
      data_set: [],
      headers: [
        { text: "No", value: "no", sortable: false, align: "center" },
        {
          text: "Spare Code",
          value: "spare_code",
          sortable: false,
          align: "center",
        },
        {
          text: "Spare Type",
          value: "spare_type",
          sortable: false,
          align: "center",
        },
        {
          text: "Spare Name",
          value: "spare_name",
          sortable: false,
          align: "center",
        },
        { text: "Qty", value: "qty", sortable: false, align: "center" },
        {
          text: "Location",
          value: "location",
          sortable: false,
          align: "center",
        },
        { text: "Picture", value: "picture", sortable: false, align: "center" },
      ],
      dialog: false,
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
