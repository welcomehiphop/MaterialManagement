<template>
  <v-dialog v-model="show" max-width="500px" scrollable>
    <v-card class="pa-10">
      <h2>Select Carrier</h2>
      <v-card class="ma-5">
        <div>
          <v-row>
            <v-col cols="4">
              <v-subheader>
                Department
              </v-subheader>
            </v-col>
            <v-col cols="7">
              <v-select
                :items="deptList"
                item-text="name"
                label="Select Department"
                item-value="code"
                @change="onSelected()"
                outlined
                dense
                v-model="searchDepartment"
              />
            </v-col>
          </v-row>
        </div>
        <div>
          <v-row>
            <v-col cols="4">
              <v-subheader>
                Emp Name
              </v-subheader>
            </v-col>
            <v-col cols="7">
              <v-text-field
                v-on:keyup.enter="onEnter"
                label="Enter Emp Name"
                outlined
                dense
                v-model="searchName"
              ></v-text-field>
            </v-col>
          </v-row>
        </div>
      </v-card>

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
            <td>{{ item.usrnm }}</td>
            <td>{{ item.posnm }}</td>
            <td></td>
          </tr>
        </template>
      </v-data-table>

      <v-btn class="mt-5" color="primary" @click.stop="show = false"
        >Close</v-btn
      >
    </v-card>
  </v-dialog>
</template>

<script>
import api from "@/services/api";
import { mapMutations } from "vuex";

export default {
  async mounted() {
    const deptListResult = await api.getDeptList();
    this.deptList = deptListResult.data;
    // this.deptList.unshift(this.searchDepartment);

    // this.deptList.unshift(this.searchDepartment);
    // this.deptList.unshift(this.searchDepartment);
    // const result = await api.getApprover();
    // this.data_set = result;
  },
  props: {
    value: Boolean,
  },
  data() {
    return {
      deptList: [],
      searchDepartment: { name: "All", code: "" },
      searchName: "",
      data_set: [],
      headers: [
        { text: "Emp Name", value: "emp_name", sortable: false },
        { text: "Department", value: "department", sortable: false },
      ],
    };
  },
  computed: {
    show: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit("input", value);
      },
    },
  },
  methods: {
    async onEnter() {
      const result = await api.getCarrierList(
        "%" + this.searchDepartment + "%",
        "%" + this.searchName + "%"
      );
      this.data_set = result.data;
    },
    async onSelected() {
      const result = await api.getCarrierList(
        "%" + this.searchDepartment + "%",
        "%" + this.searchName + "%"
      );
      this.data_set = result.data;
    },
    ...mapMutations(["setCarrier"]),
    onClick(item) {
      this.setCarrier(item);
      this.show = false;
    },
  },
};
</script>

<style scoped>
.row-pointer {
  cursor: pointer;
}
</style>
