<template>
  <v-container>
    <div v-for="(item, id) in data_set" :key="id">
      <v-card class="pa-5">
        <h2>GR Detail</h2>
        <v-form>
          <v-row>
            <v-col cols="4">
              <v-text-field
                v-model="item.spare_code"
                label="Spare Code * "
                readonly
              />
            </v-col>
            <v-col cols="4 mt-4"> </v-col>
          </v-row>
          <v-row>
            <v-col cols="4">
              <v-text-field
                v-model="item.type"
                label="Spare Type * "
                readonly
              ></v-text-field>
            </v-col>
            <v-col cols="1"></v-col>
            <v-col cols="5">
              <v-text-field
                v-model="item.description"
                label="Spare Name * "
                readonly
              ></v-text-field>
            </v-col>
          </v-row>
          <v-text-field v-model="item.purpose" label="Purpose * " readonly>
          </v-text-field>
          <v-row>
            <v-col cols="4">
              <v-text-field
                v-model="item.po"
                label="PO * "
                readonly
              ></v-text-field>
            </v-col>
            <v-col cols="1"></v-col>
            <v-col cols="3">
              <v-menu offset-y>
                <template v-slot:activator="{ on, attrs }">
                  <v-text-field
                    v-model="item.reg_date"
                    label="GR Date * "
                    v-bind="attrs"
                    v-on="on"
                    prepend-icon="mdi-calendar-month-outline"
                    readonly
                  />
                </template>
                <v-date-picker disabled></v-date-picker>
              </v-menu>
            </v-col>
          </v-row>
          <v-text-field
            v-model="item.qty"
            label="Qty * "
            readonly
          ></v-text-field>
          <v-text-field v-model="item.location" label="Location * " readonly />
          <v-divider class="mt-4" dark></v-divider>
          <h2 class="mt-4">Register Infor</h2>
          <v-row>
            <v-col cols="3">
              <v-text-field v-model="gr_empName" label="Name" readonly
                >PA</v-text-field
              >
            </v-col>
            <v-col cols="1"></v-col>
            <v-col cols="3">
              <v-text-field
                v-model="gr_empNo"
                label="EmpNo."
                readonly
              ></v-text-field>
            </v-col>
          </v-row>
        </v-form>
      </v-card>
    </div>
  </v-container>
</template>

<script>
import api from "@/services/api";
export default {
  async mounted() {
    let result = await api.getITInoutByID(this.$route.params.id);
    this.data_set = result;
  },
  data() {
    return {
      data_set: [],
      gr_empName: 'Pamorn Sirimak',
      gr_empNo : '20528906'
    };
  },
};
</script>

<style></style>
