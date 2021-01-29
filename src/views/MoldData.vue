<template>
  <v-container>
    <h1>Mold Data</h1>
    <SearchSpare />
    <v-card class="elevation-2 mt-10">
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
              {{
                data_set
                  .map(function(x) {
                    return x.id;
                  })
                  .indexOf(item.id) + 1
              }}
            </td>
            <td>{{ item.type }}</td>
            <td>
              <a href="" @click="ShareData(item.id)">{{ item.spare_code }}</a>
            </td>
            <td>{{ item.description }}</td>
            <td>{{ item.safe_stock }}</td>
            <td>{{ item.price }}</td>
            <td>{{ "Pamorn Sirimak" }}</td>
            <td>{{ item.plant }}</td>
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
                <a href="/addlocation" class="ml-3"
                  ><img
                    src="../assets/add.png"
                    height="25px"
                    width="25px"
                    alt="Image not found"
                /></a>
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
        { text: "No", value: "No", sortable: false },
        { text: "Type", value: "type", sortable: false },
        { text: "Spare Code", value: "spare_code", sortable: false },
        { text: "Description", value: "description", sortable: false },
        { text: "Safe Stock", value: "safe_stock", sortable: false },
        { text: "Price(Bath)", value: "price", sortable: false },
        { text: "Reg.Name", value: "reg_name", sortable: false },
        { text: "Plant", value: "plant", sortable: false },
        { text: "Picture", value: "picture", sortable: false },
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
