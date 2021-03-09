<template>
  <v-container>
    <h2>Request Carry Out</h2>
    <!-- Approveal Process Form -->
    <v-form ref="form" v-model="valid" lazy-validation>
      <v-card class="mt-5 elevation-5">
        <v-card-title>Approval Process</v-card-title>
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
                      v-model="getApprover.usrnm"
                      :rules="approverRules"
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
                <v-layout class="mt-5 ml-2" justify-center>
                  <div v-if="item.id === '1'">
                    <v-text-field
                      outlined
                      dense
                      v-model="approveProcess.req.comment"
                    />
                  </div>
                </v-layout>
              </td>
            </tr>
          </template>
        </v-data-table>
      </v-card>

      <!-- Request Detail form -->
      <v-card class="mt-5 elevation-5">
        <v-card-title>Request Detail</v-card-title>
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
              :rules="reqTypeRules"
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
                  :rules="carryDateRules"
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
              :rules="destinationRules"
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
              :rules="purposeRules"
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
              v-model="getCarrier.usrnm"
              :rules="carrierRules"
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
              v-model="getCarrier.deptnm"
              :rules="departmentRules"
            ></v-text-field>
          </v-col>
        </v-row>

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
              src="@/assets/minus-sign.png"
              height="30px"
              width="30px"
              alt="Image not found"
            />
          </a>
          <a>
            <img
              src="@/assets/add.png"
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
          <v-col cols="6" class="mt-2">
            <v-file-input
              multiple
              label="File input"
              @change="onFileSelected"
              :rules="filesRules"
            ></v-file-input>
          </v-col>
          <v-col cols="2"></v-col>
        </v-row>
      </v-card>
      <div class="text-right mt-10">
        <v-btn color="success" @click="onSubmit()">Submit</v-btn>
      </div>
    </v-form>
  </v-container>
</template>

<script>
import api from "@/services/api";
import { mapGetters, mapMutations } from "vuex";
import GetApprove from "@/components/PPE/GetApprove";
import GetCarrier from "@/components/PPE/GetCarrier";
import GetSpare from "@/components/PPE/GetSpare";
export default {
  created() {
    this.getNow();
  },
  methods: {
    getNow: function() {
      const today = new Date();
      const day = String(today.getDate()).padStart(2, "0");
      const month = String(today.getMonth() + 1).padStart(2, "0");
      const date = today.getFullYear() + "-" + month + "-" + day;
      // const date = day + "-" + month + "-" + today.getFullYear();
      const time =
        String(today.getHours()).padStart(2, "0") +
        ":" +
        String(today.getMinutes()).padStart(2, "0") +
        ":" +
        String(today.getSeconds()).padStart(2, "0");
      const dateTime = date + " " + time;
      this.approveProcess.req.date = dateTime;
    },
    ramdomno() {
      var dt = new Date();
      return dt.getTime();
    },
    async onSubmit() {
      if (this.$refs.form.validate()) {
        if (this.getSpare.length === 0) alert("Please select spare part.");
        let count = "1";
        let stocks = [];
        let stock = [];
        for (let i = 0; i < this.getSpare.length; i++) {
          stock[i] = await api.getPPEStock(
            this.getSpare[i].spare_code,
            this.getSpare[i].location
          );
          stocks[i] = stock[i].data[0];
        }

        for (let i = 0; i < this.getSpare.length; i++) {
          if (this.getSpare[i].qty === 0) {
            alert("Spare Code : " + stocks[i].spare_code + " are out of stock");
          } else if (this.getSpare[i].qty <= stocks[i].qty) {
            count = "0";
          } else {
            alert("Spare Code " + stocks[i].spare_code + " is not enough");
          }
        }

        if (count == "0") {
          // insert to t_esrc_carry
          const payload = {
            docno: this.ramdomno(),
            reqType: this.reqDetail.reqFor.type,
            carry_date: this.reqDetail.date,
            destination: this.reqDetail.destination,
            purpose: this.reqDetail.purpose,
            carrier: this.getCarrier.empno,
            department: this.getCarrier.deptnm,
            reg_no: this.approveProcess.req.emp_no,
            reg_date: this.approveProcess.req.date,
          };
          let result = await api.postPPEReqCarry(payload);
          // console.log(result.data[0].id)
          //insert to t_esrc_carry_spare
          for (let i = 0; i < this.getSpare.length; i++) {
            const spare_data = {
              ref_id: result.data[0].id,
              spare_code: this.getSpare[i].spare_code,
              location_code: this.getSpare[i].location,
              qty: this.getSpare[i].qty,
              approve_status: "P",
              price: this.getSpare[i].price,
            };
            await api.postPPECarrySpare(spare_data);
          }
          //insert to t_esrc_carry_file
          let bodyFormData = new FormData();
          bodyFormData.append("ref_id", result.data[0].id);
          for (let i = 0; i < this.selectedFile.length; i++) {
            bodyFormData.append("files", this.selectedFile[i]);
          }
          await api.postPPECarryFile(bodyFormData);
          //insert to t_esrc_applist
          const role = ["Creator", "Mold Team Charger", "Carrier"];
          const app_type = ["CR", "AP", "NO"];
          const step = ["0", "1", "2"];
          const app_user = [
            payload.reg_no,
            this.getApprover.empno,
            this.getCarrier.empno,
          ];
          for (let i = 0; i < role.length; i++) {
            const app_list = {
              docno: payload.docno,
              bocd: "pperoom",
              ref_id: result.data[0].id,
              app_user: app_user[i],
              role: role[i],
              app_type: app_type[i],
              appst: "P",
              withdraw: "0",
              step: step[i],
              ordno: step[i],
              comment: "",
              rcv_date: payload.reg_date,
              app_date: payload.reg_date,
              send_mail: "1",
            };
            if (i == 0) app_list.comment = this.approveProcess.req.comment;
            if (i === 1 || i == 2) {
              app_list.rcv_date = "";
              app_list.app_date = "";
            }
            await api.PostListApprove(app_list);
          }
          //   // Insert to t_esrc_appprocess
          const data = {
            title:
              "Spare Part Carry Out Request : [SP" + `${payload.docno}` + "]",
            bocd: "pperoom",
            ref_id: result.data[0].id,
            reg_no: payload.reg_no,
            reg_date: payload.reg_date,
            curstep: "1",
            docst: "P",
          };
          await api.PostProcessApprove(data);
          alert("Success");
          this.$router.push("/esrc/ppe/carryout");
        }
      }
      //   //get ref_id
      //   // console.log(result.data[0].id);
    },
    onFileSelected(event) {
      this.selectedFile = event
    },
    ...mapMutations(["deSpare"]),
  },
  data() {
    return {
      //validate  part
      valid: true,
      filesRules: [(v) => !!v || "Please upload file."],
      approverRules: [(v) => !!v || "Approver is required"],
      reqTypeRules: [(v) => !!v || "Request type is required"],
      carryDateRules: [(v) => !!v || "Carry date is required"],
      destinationRules: [(v) => !!v || "Destination is required"],
      purposeRules: [(v) => !!v || "Purpose is required"],
      carrierRules: [(v) => !!v || "Carrier is required"],
      departmentRules: [(v) => !!v || "Department is required"],
      spareCodeRules: [(v) => !!v || "Spare code is required"],
      selectedFile: [],
      approveProcess: {
        req: {
          emp_no: "20528906",
          name: "Pamorn Sirimak",
          jobTitle: "MIS",
          date: "",
          comment: "",
        },
        approve: {
          name: "Approve",
          jobTitle: "Mold Team Charger",
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
