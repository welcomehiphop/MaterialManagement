<template>
  <v-container>
    <Loading :start="loading" />
    <h2>GR Register</h2>
    <v-form ref="form" v-model="valid" lazy-validation>
      <v-row>
        <v-col cols="4">
          <v-text-field
            label="Spare Code * "
            v-model="allSpare.spare_code"
            readonly
            :rules="spareCodeRules"
            required
          />
        </v-col>
        <v-col cols="4 mt-4">
          <v-btn
            class="mx-2"
            small
            dark
            color="primary"
            fab
            @click.stop="showScheduleForm = true"
          >
            <ScheduleForm v-model="showScheduleForm" />
            <v-icon dark>
              mdi-magnify
            </v-icon>
          </v-btn>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="4">
          <v-text-field
            v-model="allSpare.type"
            label="Spare Type * "
            readonly
            :rules="spareTypeRules"
            required
          ></v-text-field>
        </v-col>
        <v-col cols="1"></v-col>
        <v-col cols="5">
          <v-text-field
            v-model="allSpare.description"
            label="Spare Name * "
            readonly
            :rules="spareNameRules"
            required
          ></v-text-field>
        </v-col>
      </v-row>
      <v-text-field
        v-model="form.purpose"
        label="Purpose * "
        :rules="purposeRules"
        required
      >
      </v-text-field>
      <v-row>
        <v-col cols="4">
          <v-text-field
            v-model="form.po"
            label="PO * "
            :rules="PORules"
            required
          ></v-text-field>
        </v-col>
        <v-col cols="1"></v-col>
        <v-col cols="3">
          <v-menu offset-y>
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                v-model="form.gr_date"
                label="GR Date * "
                v-bind="attrs"
                v-on="on"
                :rules="grDateRules"
                required
                prepend-icon="mdi-calendar-month-outline"
              />
            </template>
            <v-date-picker v-model="form.gr_date"></v-date-picker>
          </v-menu>
        </v-col>
      </v-row>
      <v-text-field
        v-model.number="form.qty"
        label="Qty * "
        :rules="qtyRules"
        required
      >
      </v-text-field>
      <v-select
        v-model="form.location"
        :items="locations"
        item-text="location_code"
        item-value="location_code"
        label="Location * "
        :rules="LocationRules"
        required
      ></v-select>
      <div class="text-right">
        <v-btn color="success" class="mt-5 pa-5 pr-9 pl-9" @click="submit">
          Submit
        </v-btn>
      </div>
      <h2>Register Infor</h2>
      <v-row>
        <v-col cols="3">
          <v-text-field v-model="form.gr_empName" label="Name">PA</v-text-field>
        </v-col>
        <v-col cols="1"></v-col>
        <v-col cols="3">
          <v-text-field v-model="form.gr_empNo" label="EmpNo."></v-text-field>
        </v-col>
      </v-row>
    </v-form>
  </v-container>
</template>

<script>
import Loading from "@/components/Loading";
import api from "@/services/api";
import ScheduleForm from "@/components/PPE/ScheduleForm";
import { mapGetters } from "vuex";
export default {
  async mounted() {
    this.loading = true;
    const condition = {
      location_code: "",
      plant: "",
    };
    const result = await api.getLocationData(condition);
    this.locations = result.data;
    this.loading = false;
  },
  data() {
    return {
      loading: false,
      //validate part
      valid: true,
      spareCodeRules: [(v) => !!v || "Spare Code is required"],
      spareTypeRules: [(v) => !!v || "Spare Type is required"],
      spareNameRules: [(v) => !!v || "Spare Name is required"],
      purposeRules: [(v) => !!v || "Purpose is required"],
      PORules: [(v) => !!v || "PO is required"],
      grDateRules: [(v) => !!v || "Date is required"],
      LocationRules: [(v) => !!v || "Location is required"],
      qtyRules: [
        (v) => !!v || "Qty is required",
        (v) => Number.isInteger(Number(v)) || "The qty must be an integer",
        (v) => v > 0 || "The value must be greater than zero",
      ],
      form: {
        purpose: "",
        po: "",
        gr_date: new Date().toISOString().substr(0, 10),
        qty: "",
        location: "",
        gr_empName: "Pamorn Sirimak",
        gr_empNo: "20528906",
      },
      locations: [],
      showScheduleForm: false,
    };
  },
  components: {
    ScheduleForm,
    Loading,
  },

  methods: {
    async submit() {
      if (this.$refs.form.validate()) {
        this.loading = true;
        let data = {
          spare_code: this.allSpare.spare_code,
          purpose: this.form.purpose,
          po: this.form.po,
          reg_date: this.form.gr_date,
          qty: this.form.qty,
          location: this.form.location,
          reg_empno: this.form.gr_empNo,
          movement: "GR",
        };
        await api.postInoutData(data);

        let result = await api.getPPEStock(
          this.allSpare.spare_code,
          this.form.location
        );
        if (result.data[0] != null) {
          let dataUpdate = {
            spare_code: this.allSpare.spare_code,
            location_code: this.form.location,
            qty: parseInt(this.form.qty) + parseInt(result.data[0].qty),
          };
          await api.putPPEStock(dataUpdate);
        } else {
          let data_stock = {
            spare_code: this.allSpare.spare_code,
            location_code: this.form.location,
            qty: this.form.qty,
          };
          await api.postPPEStock(data_stock);
        }
        this.loading = false;
      }
    },
  },
  computed: {
    ...mapGetters(["allSpare"]),
  },
};
</script>

<style></style>
