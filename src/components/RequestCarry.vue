<template>
  <v-container>
    <h2>Request Carry Out</h2>
    <!-- Approveal Process Form -->
    <v-card class="mt-5 elevation-5">
      <v-card-title>Approval Process</v-card-title>
      <v-form>
        <v-data-table
          :headers="headers"
          :items="items"
          class="elevation-5"
          hide-default-footer
        >
          <template v-slot:item="{ item }">
            <tr class="mx-2">
              <td>
                <v-layout justify-center>
                  {{
                    items
                      .map(function(x) {
                        return x.id;
                      })
                      .indexOf(item.id)
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
                  Mail
                </v-layout>
              </td>
              <td>
                <div v-if="item.id === '1'">
                  <v-layout class="mt-5 ml-2" justify-center>
                    <v-text-field
                      outlined
                      dense
                      readonly
                      v-model="approveProcess.req.name"
                    />
                  </v-layout>
                </div>
                <div v-else>
                  <v-layout class="mt-5 ml-2" justify-center>
                    <v-text-field
                      outlined
                      dense
                      readonly
                      v-model="getApprover.emp_name"
                    />
                    <v-btn
                      class="ml-4"
                      small
                      dark
                      color="primary"
                      fab
                      @click.stop="showGetApprove = true"
                    >
                      <GetApprove v-model="showGetApprove" />
                      <v-icon dark>
                        mdi-magnify
                      </v-icon>
                    </v-btn>
                  </v-layout>
                </div>
              </td>
              <td>
                <v-layout justify-center>
                  <div v-if="item.id === '1'">
                    {{ approveProcess.req.jobTitle }}
                  </div>
                  <div v-else>{{ approveProcess.approve.jobTitle }}</div>
                </v-layout>
              </td>
              <td>
                <v-layout justify-center>
                  <div v-if="item.id === '1'">
                    {{ approveProcess.req.date }}
                  </div>
                  <div v-else>{{ approveProcess.approve.date }}</div>
                </v-layout>
              </td>
              <td>
                <v-layout justify-center>
                  //role comment
                </v-layout>
              </td>
            </tr>
          </template>
          <v-text-field outlined dense></v-text-field>
        </v-data-table>
      </v-form>
    </v-card>

    <!-- Request Detail form -->
    <v-card class="mt-5 elevation-5">
      <v-card-title>Request Detail</v-card-title>
      <v-form>
        <v-row align-content="center" justify="center">
          <v-col cols="1">
            <v-subheader>Request For :</v-subheader>
          </v-col>
          <v-col cols="3">
            <v-select
              outlined
              dense
              v-model="reqDetail.reqFor"
              :items="types"
              item-text="type"
              item-value="value"
              persistent-hint
              return-object
              single-line
            ></v-select>
          </v-col>
          <v-col cols="1"></v-col>
          <v-col cols="1">
            <v-subheader>Carry Out Date :</v-subheader>
          </v-col>
          <v-col cols="3">
            <v-menu offset-y>
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  v-model="reqDetail.date"
                  v-bind="attrs"
                  v-on="on"
                  prepend-icon="mdi-calendar-month-outline"
                  readonly
                />
              </template>
              <v-date-picker v-model="reqDetail.date"></v-date-picker>
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
              v-model="reqDetail.destination"
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
              v-model="reqDetail.purpose"
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
              v-bind="reqDetail.carrier"
              v-model="getCarrier.emp_name"
            ></v-text-field>
          </v-col>
          <v-col cols="1">
            <v-btn
              class="mx-2"
              small
              dark
              color="primary"
              fab
              @click.stop="showGetCarrier = true"
            >
              <!-- add dialog here -->
              <GetCarrier v-model="showGetCarrier" />
              <v-icon dark>
                mdi-magnify
              </v-icon>
            </v-btn>
          </v-col>
          <v-col cols="1">
            <v-subheader>Department:</v-subheader>
          </v-col>
          <v-col cols="3">
            <v-text-field
              outlined
              dense
              readonly
              v-model="getCarrier.department"
            ></v-text-field>
          </v-col>
        </v-row>
      </v-form>

      <!-- Detail Information form -->
    </v-card>
    <v-card class="elevation-5 mt-5">
      <v-card-title>Detail Information</v-card-title>
      <!--dynamic add form-->
      <v-card
        class="elevation-5 pt-10 ma-5"
        v-for="(spare, index) in getSpare"
        :key="index"
        id="form"
      >
        <v-row align-content="center" justify="center">
          <v-col cols="1">
            <v-subheader>Spare Code</v-subheader>
          </v-col>
          <v-col cols="3">
            <v-text-field
              v-model="spare.spare_code"
              outlined
              dense
              readonly
            ></v-text-field>
          </v-col>
          <v-col cols="1"></v-col>
          <v-col cols="1">
            <v-subheader>Qty</v-subheader>
          </v-col>
          <v-col cols="3">
            <v-text-field outlined dense v-model="spare.qty"></v-text-field>
          </v-col>
        </v-row>
        <v-row align-content="center" justify="center">
          <v-col cols="1">
            <v-subheader>Spare Name</v-subheader>
          </v-col>
          <v-col cols="3">
            <v-text-field
              outlined
              dense
              readonly
              v-model="spare.description"
            ></v-text-field>
          </v-col>
          <v-col cols="1"></v-col>
          <v-col cols="1">
            <v-subheader>Location</v-subheader>
          </v-col>
          <v-col cols="3">
            <v-text-field
              outlined
              dense
              readonly
              v-model="spare.location"
            ></v-text-field>
          </v-col>
        </v-row>
      </v-card>

      <div class="text-right pa-4 ">
        <a @click="deSpare()" class="mr-5 mt-10">
          <img
            src="../assets/minus-sign.png"
            height="30px"
            width="30px"
            alt="Image not found"
          />
        </a>
        <a>
          <img
            src="../assets/add.png"
            height="25px"
            width="25px"
            alt="Image not found"
            @click.stop="showGetSpare = true"
          />
          <GetSpare v-model="showGetSpare" />
        </a>
      </div>

      <!-- Form upload multifile-->
    </v-card>
    <v-card class="elevation-5 mt-5">
      <v-card-title>
        Attchment
      </v-card-title>
      <v-row align-content="center" justify="center">
        <v-col cols="1">
          <v-subheader>
            Attach File:
          </v-subheader>
        </v-col>
        <v-col cols="1" class="mt-2">
          <input type="file" @change="onFileSelected" multiple/>
        </v-col>
        <v-col cols="7"></v-col>
      </v-row>
    </v-card>
    <div class="text-right mt-10">
      <v-btn color="success" @click="onSubmit()">Submit</v-btn>
    </div>
  </v-container>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import GetApprove from "./GetApprove";
import GetCarrier from "./GetCarrier";
import GetSpare from "./GetSpare";
export default {
  methods: {
    onSubmit() {
      let data = {
        req: {
          name: this.approveProcess.req.name,
          jobTitle: this.approveProcess.req.jobTitle,
        },
        detail: {
          reqFor: this.reqDetail.reqFor,
          date: this.reqDetail.date,
          des: this.reqDetail.destination,
          purpose: this.reqDetail.purpose,
        },
        carrier: {
          emp_no: this.getCarrier.emp_no,
          emp_name: this.getCarrier.emp_name,
          department: this.getCarrier.department,
        },
        spare: {
          spare: this.getSpare,
        },
        file: {
          filename: this.selectedFile,
        },
      };
      console.log(data);
    },
    onFileSelected(event) {
        this.selectedFile = event.target.files;
    },
    ...mapMutations(["deSpare"]),
  },
  data() {
    return {
      selectedFile: [],
      approveProcess: {
        req: {
          name: "Pamorn Sirimak",
          jobTitle: "MIS",
          date: new Date().toISOString().substr(0, 10),
          comment: "",
        },
        approve: {
          name: "Approve",
          jobTitle: "Leader",
          date: "",
          comment: "",
        },
      },
      showGetCarrier: false,
      reqDetail: {
        reqFor: "",
        date: new Date().toISOString().substr(0, 10),
        destination: "",
        purpose: "",
        carrier: "",
        department: "",
      },
      files: [{ filename: "" }],
      // spares: [{ spare_code: "", spare_name: "", location: "", qty: "" }],

      showGetApprove: false,
      showGetSpare: false,
      select: "",
      types: [
        { type: "Vendor", value: "vendor" },
        { type: "TSE", value: "tse" },
      ],
      items: [
        { id: "1", type: "Creator" },
        { id: "2", type: "Approve" },
      ],
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
          width: "2%",
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
          width: "10%",
        },
        {
          text: "Role Comment",
          value: "roleComment",
          aling: "center",
          sortable: false,
          align: "center",
          width: "10%",
        },
      ],
    };
  },
  computed: {
    ...mapGetters(["getApprover"]),
    ...mapGetters(["getCarrier"]),
    ...mapGetters(["getSpare"]),
  },
  components: {
    GetApprove,
    GetCarrier,
    GetSpare,
  },
};
</script>

<style></style>
