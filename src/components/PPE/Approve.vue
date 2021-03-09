<template>
  <v-container>
    <h2>Carry Out Detail</h2>
    <div class="text-right">
      <v-btn color="success" @click="changeStatus('C')">Approve</v-btn>
      <v-btn class="ml-5" color="error" @click="changeStatus('R')">Reject</v-btn>
    </div>
    <v-card class="mt-5 elevation-5 pa-5">
      <v-card-title>Approval Process</v-card-title>
      <v-form>
        <v-data-table
          :headers="headers"
          :items="data_set"
          class="elevation-5 ma-10 pa-5"
          hide-default-footer
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
                      .indexOf(item.id)
                  }}
                </v-layout>
              </td>
              <td>
                <v-layout justify-center>
                  {{ item.role }}
                </v-layout>
              </td>
              <td>
                <v-layout justify-center>
                  Mail
                </v-layout>
              </td>
              <td>
                <div v-if="item.step == '0'">
                  <v-layout justify-center>
                    {{ item.Name }}
                  </v-layout>
                </div>
                <div v-if="item.step == '1'">
                  <v-layout justify-center>
                    {{ item.Name }}
                  </v-layout>
                </div>
                <div v-if="item.step == '2'">
                  <v-layout justify-center>
                    {{ item.Name }}
                  </v-layout>
                </div>
              </td>
              <td>
                <v-layout justify-center>
                  <div v-if="item.step == '0'">
                    <v-layout justify-center>
                      {{ item.cl_band }}
                    </v-layout>
                  </div>
                  <div v-if="item.step == '1'">
                    <v-layout justify-center>
                      {{ item.cl_band }}
                    </v-layout>
                  </div>
                  <div v-if="item.step == '2'">
                    <v-layout justify-center>
                      {{ item.cl_band }}
                    </v-layout>
                  </div>
                </v-layout>
              </td>
              <td>
                <v-layout justify-center>
                  <div v-if="item.step == '0'">
                    <v-layout justify-center>
                      {{ item.rcv_date }}
                    </v-layout>
                  </div>
                  <div v-if="item.step == '1'">
                    <v-layout justify-center>
                      {{ item.rcv_date }}
                    </v-layout>
                  </div>
                  <div v-if="item.step == '2'">
                    <v-layout justify-center>
                      {{ item.rcv_date }}
                    </v-layout>
                  </div>
                </v-layout>
              </td>
              <td>
                <v-layout justify-center>
                  <div v-if="item.step == '0'">
                    <v-layout justify-center>
                      {{ item.comment }}
                    </v-layout>
                  </div>
                  <div v-if="item.step == '1'">
                    <v-layout justify-center>
                      {{ item.comment }}
                    </v-layout>
                  </div>
                  <div v-if="item.step == '2'">
                    <v-layout justify-center>
                      {{ item.comment }}
                    </v-layout>
                  </div>
                </v-layout>
              </td>
            </tr>
          </template>
          <v-text-field outlined dense></v-text-field>
        </v-data-table>
      </v-form>
    </v-card>

    <v-card class="mt-5 elevation-5 pa-5">
      <v-card-title>Request Detail</v-card-title>
      <v-form>
        <v-row align-content="center" justify="center">
          <v-col cols="1">
            <v-subheader>Request For :</v-subheader>
          </v-col>
          <v-col cols="3">
            <v-text-field
              outlined
              dense
              v-model="detail.reqType"
              readonly
            ></v-text-field>
          </v-col>
          <v-col cols="1"></v-col>
          <v-col cols="1">
            <v-subheader>Carry Out Date :</v-subheader>
          </v-col>
          <v-col cols="3">
            <v-menu offset-y>
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  v-bind="attrs"
                  v-on="on"
                  v-model="detail.carry_date"
                  prepend-icon="mdi-calendar-month-outline"
                  readonly
                />
              </template>
            </v-menu>
          </v-col>
        </v-row>
        <v-row align-content="center" justify="center">
          <v-col cols="1">
            <v-subheader>Destination:</v-subheader>
          </v-col>
          <v-col cols="3">
            <v-text-field
              outlined
              dense
              v-model="detail.destination"
              readonly
            ></v-text-field>
          </v-col>
          <v-col cols="1"></v-col>
          <v-col cols="1">
            <v-subheader>Purpose:</v-subheader>
          </v-col>
          <v-col cols="3">
            <v-text-field
              outlined
              dense
              v-model="detail.purpose"
              readonly
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row align-content="center" justify="center">
          <v-col cols="1">
            <v-subheader>Carrier:</v-subheader>
          </v-col>
          <v-col cols="3">
            <v-text-field
              outlined
              dense
              readonly
              v-model="detail.carrier_name"
            ></v-text-field>
          </v-col>
          <v-col cols="1"> </v-col>
          <v-col cols="1">
            <v-subheader>Department:</v-subheader>
          </v-col>
          <v-col cols="3">
            <v-text-field
              outlined
              dense
              readonly
              v-model="detail.department"
            ></v-text-field>
          </v-col>
        </v-row>
      </v-form>
    </v-card>

    <v-card class="mt-5 elevation-5 pa-5">
      <v-card-title>Attachment:</v-card-title>
      <div v-for="(f, index) in file" :key="index">
        <v-row align-content="center" justify="center">
          <v-col cols="1"></v-col>
          <v-col cols="1">
            <v-subheader>Attach File:</v-subheader>
          </v-col>
          <v-col cols="7">
            <v-text-field outlined dense readonly v-model="f.filename">
            </v-text-field>
          </v-col>
          <v-col cols="1"></v-col>
          <v-col cols="1"> </v-col>
          <v-col cols="3"> </v-col>
        </v-row>
      </div>
    </v-card>

    <v-card class="mt-5 elevation-5 pa-5">
      <v-card-title>
        Detail Information
      </v-card-title>
      <v-data-table
        class="elevation-5 ma-10 pa-5"
        :headers="spareHeaders"
        hide-default-footer
        :items="spares"
      >
        <template v-slot:item="{ item }">
          <tr class="mx-2">
            <td>
              <v-layout justify-center>
                {{
                  spares
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
                {{ item.total + " THB" }}
              </v-layout>
            </td>
          </tr>
        </template>
      </v-data-table>
    </v-card>
  </v-container>
</template>

<script>
import api from "@/services/api";
export default {
  methods: {
    async changeStatus(docst) {
      console.log(docst)
      const data = {
        docst: docst,
      };
      await api.putFeStatus(this.$route.params.id, data);
    },

  },
  async mounted() {
    const result = await api.getPPECarryByID(this.$route.params.id);
    this.data_set = result.data.process;
    this.detail = result.data.detail[0];
    this.file = result.data.file;
    this.spares = result.data.spares;
  },
  data() {
    return {
      spareHeaders: [
        { text: "No", value: "No", align: "center", sortable: false },
        {
          text: "Spare Code",
          value: "spare_code",
          align: "center",
          sortable: false,
        },
        { text: "Qty", value: "qty", align: "center", sortable: false },
        {
          text: "Location",
          value: "location",
          align: "center",
          sortable: false,
        },
        { text: "Price", value: "Price", align: "center", sortable: false },
      ],
      spares: [],
      file: [],
      data_set: [],
      detail: [],
      headers: [
        {
          text: "Step",
          value: "step",
          aling: "center",
          sortable: false,
          align: "center",
          width: "2%",
        },
        {
          text: "Type",
          value: "type",
          aling: "center",
          sortable: false,
          align: "center",
          width: "15%",
        },
        {
          text: "Mail",
          value: "mail",
          aling: "center",
          sortable: false,
          align: "center",
          width: "2%",
        },
        {
          text: "Name",
          value: "name",
          aling: "center",
          sortable: false,
          align: "center",
          width: "20%",
        },
        {
          text: "Job Title",
          value: "JobTitle",
          aling: "center",
          sortable: false,
          align: "center",
          width: "10%",
        },
        {
          text: "Date",
          value: "date",
          aling: "center",
          sortable: false,
          align: "center",
          width: "20%",
        },
        {
          text: "Role Comment",
          value: "roleComment",
          aling: "center",
          sortable: false,
          align: "center",
          width: "15%",
        },
      ],
    };
  },
};
</script>

<style></style>
