<template>
  <v-container>
    <h1>Mold Data</h1>
    <SearchSpare />
    <v-card class="elevation-2 ma-10">
      <v-data-table
        :headers="headers"
        :items="data_set"
        item-key="name"
        class="elevation-1"
        :calculate-widths="true"
        :footer-props="{
          'items-per-page-options': [10, 20, 30, 40],
        }"
        :items-per-page="20"
      >
      
        <template v-slot:item="{ item }">
          <tr class="mx-2">
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
                {{ item.type }}
              </v-layout>
            </td>
            <td>
              <v-layout justify-center>
                {{ item.spare_code }}
              </v-layout>
            </td>
            <td>
              <v-layout justify-center>
                {{ item.description }}
              </v-layout>
            </td>
            <td>
              <v-layout justify-center>
                {{ item.safe_stock }}
              </v-layout>
            </td>
            <td>
              <v-layout justify-center>
                {{ item.price }}
              </v-layout>
            </td>
            <td>
              <v-layout justify-center>
                Pamorn Sirimak
              </v-layout>
            </td>
            <td>
              <v-layout justify-center>
                {{ item.plant }}
              </v-layout>
            </td>
            <td>
              <img
                :src="imageUrl + item.picture"
                alt="Image not found"
                width="80"
                height="80"
              />
            </td>
            <td>
              <div class="actionIcon">
                <a href="" class="ml-3" @click="ShareData(item.id)"
                  ><img
                    src="../assets/edit.png"
                    height="25px"
                    width="25px"
                    alt="Image not found"
                /></a>
                <a href="javascript:;" class="ml-3"
                  ><img
                    @click="onDelete(item.id)"
                    src="../assets/empty-tash-can.png"
                    height="25px"
                    width="25px"
                    alt="Image not found"
                /></a>
              </div>
            </td>
          </tr>
        </template>
      </v-data-table>
    </v-card>
  </v-container>
</template>

<script>
import api from "@/services/api";
import SearchSpare from "../components/SearchSpare";
export default {
  methods: {
    ShareData(id) {
      this.$router.push(`/editspare/${id}`);
    },
    async onDelete(id) {
      if (confirm("Do you really want to delete?")) {
        await api
          .deleteEsrcData(id)
          .then((resp) => {
            alert(resp);
          })
          .catch((error) => {
            alert(error);
          });
      }
      const result = await api.getEsrcData();
      this.data_set = result;
    },
  },
  async mounted() {
    const result = await api.getEsrcData();
    this.data_set = result;
  },
  data() {
    return {
      imageUrl: "http://localhost:3000/image/",
      data_set: [],
      headers: [
        {
          text: "No",
          value: "No",
          sortable: false,
          width: "2%",
          align: "center",
        },
        {
          text: "Type",
          value: "type",
          sortable: false,
          width: "10%",
          align: "center",
        },
        {
          text: "Spare Code",
          value: "spare_code",
          sortable: false,
          width: "10%",
          align: "center",
        },
        {
          text: "Description",
          value: "description",
          sortable: false,
          width: "20%",
          align: "center",
        },
        {
          text: "Safe Stock",
          value: "safe_stock",
          sortable: false,
          width: "2%",
          align: "center",
        },
        {
          text: "Price(Bath)",
          value: "price",
          sortable: false,
          width: "2%",
          align: "center",
        },
        {
          text: "Reg.Name",
          value: "reg_name",
          sortable: false,
          width: "10%",
          align: "center",
        },
        {
          text: "Plant",
          value: "plant",
          sortable: false,
          width: "1%",
          align: "center",
        },
        {
          text: "Picture",
          value: "picture",
          sortable: false,
          width: "10%",
          align: "center",
        },
      ],
    };
  },
  components: {
    SearchSpare,
  },
};
</script>

<style scoped>
.actionIcon {
  margin: 1rem;
  text-align: center;
}
</style>
