<template>
  <v-container>
    <Loading :start="loading"/>
    <h2>GI Register</h2>
    <v-form ref="form" v-model="valid" lazy-validation>
      <v-row>
        <v-col cols="4">
          <v-text-field
            v-model="allSpare.spare_code"
            label="Spare Code * "
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
        <v-col cols="3">
          <v-menu offset-y>
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                v-model="form.gr_date"
                label="GI Date * "
                v-bind="attrs"
                v-on="on"
                prepend-icon="mdi-calendar-month-outline"
                :rules="grDateRules"
                required
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
      ></v-text-field>
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
import ScheduleForm from "../components/ScheduleForm";
import { mapGetters } from "vuex";
export default {
  async mounted() {
    this.loading = true
    const condition = {
      location_code: "%%",
      plant: "%%",
    };
    const result = await api.getLocation(condition);
    this.locations = result;
    this.loading = false
  },
  data() {
    return {
      loading: false,
      valid: true,
      spareCodeRules: [(v) => !!v || "Spare Code is required"],
      spareTypeRules: [(v) => !!v || "Spare Type is required"],
      spareNameRules: [(v) => !!v || "Spare Name is required"],
      purposeRules: [(v) => !!v || "Purpose is required"],
      grDateRules: [(v) => !!v || "Date is required"],
      qtyRules: [
        (v) => !!v || "Qty is required",
        (v) => Number.isInteger(Number(v)) || "The qty must be an integer",
        (v) => v > 0 || "The value must be greater than zero",
      ],
      LocationRules: [(v) => !!v || "Location is required"],
      form: {
        purpose: "",
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
    Loading,
    ScheduleForm,
  },
  methods: {
    async submit(e) {
      this.loading = true
      let data = {
        spare_code: this.allSpare.spare_code,
        purpose: this.form.purpose,
        po: "",
        reg_date: this.form.gr_date,
        qty: this.form.qty,
        location: this.form.location,
        reg_empno: this.form.gr_empNo,
        movement: "GI",
      };
      if (this.$refs.form.validate()) {
        //get qty in stock for update
        let result = await api.getStockQty(
          this.allSpare.spare_code,
          this.form.location
        );
        //update stock qty - out
        if (result.data[0] != null) {
          if (parseInt(result.data[0].qty) - parseInt(this.form.qty) >= 0) {
            let dataUpdate = {
              spare_code: this.allSpare.spare_code,
              location_code: this.form.location,
              qty: parseInt(result.data[0].qty) - parseInt(this.form.qty),
            };
            await api.UpdateInoutStock(dataUpdate);
            await api.postInoutGR(data);
          } else {
            alert(
              this.form.location +
                " is not enough , " +
                " Total = " +
                result.data[0].qty
            );
          }
        } else {
          alert(this.form.location + " is empty");
        }
      }
      this.loading = false
      e.preventDefault();
    },
  },
  computed: {
    ...mapGetters(["allSpare"]),
  },
};
</script>

<style></style>
