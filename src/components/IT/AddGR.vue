<template>
  <v-container>
    <h2>GR Register</h2>
    <v-form>
      <v-row>
        <v-col cols="4">
          <v-text-field
            label="Spare Code * "
            v-model="allSpare.spare_code"
            readonly
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
          ></v-text-field>
        </v-col>
        <v-col cols="1"></v-col>
        <v-col cols="5">
          <v-text-field
            v-model="allSpare.description"
            label="Spare Name * "
            readonly
          ></v-text-field>
        </v-col>
      </v-row>
      <v-text-field v-model="form.purpose" label="Purpose * "> </v-text-field>
      <v-row>
        <v-col cols="4">
          <v-text-field v-model="form.po" label="PO * "></v-text-field>
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
                prepend-icon="mdi-calendar-month-outline"
              />
            </template>
            <v-date-picker v-model="form.gr_date"></v-date-picker>
          </v-menu>
        </v-col>
      </v-row>
      <v-text-field v-model="form.qty" label="Qty * "></v-text-field>
      <v-select
        v-model="form.location"
        :items="locations"
        item-text="location_code"
        item-value="location_code"
        label="Location * "
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
import api from "@/services/api";
import ScheduleForm from "@/components/IT/ScheduleForm";
import { mapGetters } from "vuex";
export default {
  async mounted() {
    const condition = {
      location_code: "",
      plant: "",
    };
    const result = await api.getITLocation(condition);
    this.locations = result;
  },
  data() {
    return {
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
  },

  methods: {
    async submit() {
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
      await api.postITInout(data);
      let result = await api.getITStock(
        this.allSpare.spare_code,
        this.form.location
      );
      if (result[0] != null) {
        let dataUpdate = {
          spare_code: this.allSpare.spare_code,
          location_code: this.form.location,
          qty: parseInt(this.form.qty) + parseInt(result[0].qty),
        };
        await api.putITStock(dataUpdate);
      } else {
        let data_stock = {
          spare_code: this.allSpare.spare_code,
          location_code: this.form.location,
          qty: this.form.qty,
        };
        await api.postITStock(data_stock);
      }
    },
  },
  computed: {
    ...mapGetters(["allSpare"]),
  },
};
</script>

<style></style>
