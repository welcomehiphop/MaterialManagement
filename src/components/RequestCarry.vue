<template>
  <v-container>
    <h2>Request Carry Out</h2>
    <!-- Approveal Process Form -->
    <v-card class="mt-5">
      
      <v-card-title>Approval Process</v-card-title>
      <v-form>
        <v-data-table
          :headers="headers"
          :items="items"
          class="elevation-1"
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
    <v-card class="mt-5"> 
      <v-card-title>Request Detail</v-card-title>
      {{getCarrier}}
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
      <v-card-title>Detail Information </v-card-title>
      <!--dynamic add form-->
      <v-card
        class="elevation-5 pt-10 ma-5"
        v-for="(spare, index) in spares"
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
              disabled
            ></v-text-field>
          </v-col>
          <v-col cols="1"
            ><v-btn
              class="mx-2"
              small
              dark
              color="primary"
              fab
              @click.stop="showGetApprove = true">
              <v-icon dark>
                mdi-magnify
              </v-icon>
            </v-btn></v-col
          >
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
              disabled
              v-model="spare.spare_name"
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
              disabled
              v-model="spare.location"
            ></v-text-field>
          </v-col>
        </v-row>
      </v-card>

      <div class="text-right pa-4 ">
        <a @click="delSpareForm()" class="mr-5 mt-10">
          <img
            src="../assets/minus-sign.png"
            height="30px"
            width="30px"
            alt="Image not found"
          />
        </a>
        <a @click="addSpareForm()">
          <img
            src="../assets/add.png"
            height="25px"
            width="25px"
            alt="Image not found"
          />
        </a>
      </div>

      <!-- Form upload multifile-->
    </v-card>
    <v-card class="elevation-5 mt-5">
      <v-card-title>
        Attchment
      </v-card-title>
      <v-card
        class="elevation-5 pt-5 ma-5"
        v-for="(file, index) in files"
        :key="index"
      >
        <v-row align-content="center" justify="center">
          <v-col cols="1">
            <v-subheader>
              Attach File:
            </v-subheader>
          </v-col>
          <v-col cols="1" class="mt-2">
            <input type="file" @change="onFileSelected" />
          </v-col>
          <v-col cols="7"></v-col>
        </v-row>
      </v-card>
      <div class="text-right pa-4 ">
        <a @click="delUploadFile()" class="mr-5 mt-10">
          <img
            src="../assets/minus-sign.png"
            height="30px"
            width="30px"
            alt="Image not found"
          />
        </a>
        <a @click="addUploadFile()">
          <img
            src="../assets/add.png"
            height="25px"
            width="25px"
            alt="Image not found"
          />
        </a>
      </div>
    </v-card>
    <div class="text-right mt-10">
      <v-btn color="success" @click="onSubmit()">Submit</v-btn>
    </div>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";
import GetApprove from "./GetApprove";
import GetCarrier from "./GetCarrier"
export default {
  methods: {
    onSubmit() {
      console.log(this.selectedFile);
      console.log(this.approveProcess.req);
      console.log(this.approveProcess.approve);
      console.log(this.reqDetail);
      console.log(this.spares);
      console.log(this.files);
    },
    onFileSelected(event) {
      this.selectedFile = event.target.files;
    },
    addSpareForm() {
      if (this.spares.length <= 5) {
        this.spares.push({
          spare_code: "",
          spare_name: "",
          location: "",
          qty: "",
        });
      } else {
        alert("Maximum");
      }
    },
    delSpareForm() {
      if (this.spares.length > 1) {
        this.spares.pop();
      }
    },
    addUploadFile() {
      if (this.files.length <= 5) {
        this.files.push({ filename: "" });
      } else {
        alert("Maximum upload files.");
      }
    },
    delUploadFile() {
      if (this.files.length > 1) {
        this.files.pop();
      }
    },
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
      spares: [{ spare_code: "", spare_name: "", location: "", qty: "" }],

      showGetApprove: false,
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
    ...mapGetters(["getCarrier"])
  },
  components: {
    GetApprove,
    GetCarrier,
  },
};
</script>

<style></style>
