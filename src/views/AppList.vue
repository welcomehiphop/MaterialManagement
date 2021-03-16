<template>
  <v-container>
    <div class="text-center">
      <h1>Approval List</h1>
    </div>
    <v-data-table
      class="elevation-5 ma-10"
      :headers="headers"
      hide-default-footer
      :items="data_set"
    >
      <template v-slot:item="{ item }">
        <tr class="pointer mx-2" @click.stop="shareData(item)">
          <td>
            <v-layout justify-center>
              {{
                data_set
                  .map(function(x) {
                    return x.idx;
                  })
                  .indexOf(item.idx) + 1
              }}
            </v-layout>
          </td>
          <td>
            <v-layout justify-center>
              {{ item.title }}
            </v-layout>
          </td>
          <td>
            <v-layout justify-center>
              {{ item.usrnm }}
            </v-layout>
          </td>
          <td>
            <v-layout justify-center>
              {{ formatDateFromDB(item.regdate) }}
            </v-layout>
          </td>
          <td>
            <v-layout justify-center>
              <v-chip class="clickable" :color="getColor(item.appst)" dark>
                <!-- {{ item.status }} -->
                <span>{{ item.appst }}</span>
              </v-chip>
            </v-layout>
          </td>
        </tr>
      </template>
    </v-data-table>
  </v-container>
</template>

<script>
import { formatDateFromDB } from "@/function/exportexcel";
import api from "@/services/api";
export default {
  async mounted() {
    const data = await api.getAppList();
    this.data_set = data;
  },
  methods: {
    shareData(item) {
      // console.log(`/esrc/${item.bocd}/approve/${item.ref_idx}`)
      this.$router.push(`/esrc/${item.bocd.toLowerCase()}/approve/${item.ref_idx}`);
    },
    getColor(status) {
      if (status === "Pending") return "#FF9800";
      if (status === "Approved") return "#4CAF50";
      if (status === "Reject") return "#F44336";
      if (status === "Withdraw") return "#9E9E9E";
    },
    formatDateFromDB,
  },
  data: () => ({
    data_set: [],
    headers: [
      {
        text: "No",
        value: "no",
        sortable: false,
        align: "center",
        class: "grey darken-3 white--text subtitle-1",
      },
      {
        text: "Title",
        value: "title",
        sortable: false,
        align: "center",
        class: "grey darken-3 white--text subtitle-1",
      },
      {
        text: "Originator",
        value: "originator",
        sortable: false,
        align: "center",
        class: "grey darken-3 white--text subtitle-1",
      },
      {
        text: "Submit Date",
        value: "submit_date",
        sortable: false,
        align: "center",
        class: "grey darken-3 white--text subtitle-1",
      },
      {
        text: "Status",
        value: "status",
        sortable: false,
        align: "center",
        class: "grey darken-3 white--text subtitle-1",
      },
    ],
  }),
};
</script>

<style scoped>
.clickable {
  cursor: pointer;
}

td {
  cursor: pointer;
}
</style>
