<template>
  <v-container>
    <h2>Spare Part Register</h2>
    <v-form ref="form" v-model="valid" lazy-validation>
      <v-select
        v-model="form.selectPlant"
        :items="plants"
        item-text="plant"
        item-value="value"
        label="Plant *"
        persistent-hint
        required
        :rules="plantRules"
      ></v-select>

      <v-text-field
        v-model="form.spareCode"
        :counter="20"
        label="Spare Code *"
        required
        :rules="spareCodeRules"
      ></v-text-field>

      <v-text-field
        v-model="form.description"
        label="Description *"
        :rules="descriptionRules"
        required
      ></v-text-field>

      <v-text-field
        v-model="form.price"
        label="Price *"
        :rules="priceRules"
        required
      ></v-text-field>

      <v-text-field
        v-model.number="form.safeStock"
        label="Safe Stock *"
        required
        :rules="safeStockRules"
      ></v-text-field>

      <!-- <v-text-field
        v-model="form.reg_empno"
        label="Reg No *"
        required
      ></v-text-field> -->

      <v-select
        v-model="form.selectType"
        :items="types"
        item-text="type"
        item-value="value"
        label="Type *"
        persistent-hint
        :rules="typeRules"
        required
      ></v-select>
      <!-- <v-file-input truncate-length="15" @click="onFileSelected"></v-file-input> -->

      <v-file-input
        dense
        label="File input"
        filled
        @change="onFileSelected"
        :rules="imageRules"
        prepend-icon="mdi-camera"
      ></v-file-input>

      <div class="text-right">
        <v-btn color="success" class="mt-10 pa-5 pr-9 pl-9" @click="submit">
          Submit
        </v-btn>
      </div>
    </v-form>
  </v-container>
</template>

<script>
import api from "@/services/api";
export default {
  data() {
    return {
      //validate part
      valid: true,
      plantRules: [(v) => !!v || "Plant is required"],
      spareCodeRules: [(v) => !!v || "Spare code is required"],
      descriptionRules: [(v) => !!v || "Spare Name is required"],
      priceRules: [(v) => !!v || "Price is required"],
      safeStockRules: [
        (v) => !!v || "Safe Stock is required",
        (v) => Number.isInteger(Number(v)) || "The safe stock must be an integer",
        (v) => v > 0 || "The safe stock must be greater than zero",
      ],
      typeRules: [(v) => !!v || "Type is required"],
      imageRules: [(v) => !!v || "Please upload image"],
      form: {
        selectPlant: "",
        spareCode: "",
        selectType: "",
        price: "",
        safeStock: "",
        description: "",
        reg_empno: "",
      },
      types: [
        { type: "Spare Part", value: "Spare Part" },
        { type: "Equipment", value: "Equipment" },
      ],
      plants: [
        { plant: "KS", value: "KS" },
        { plant: "A/C", value: "AC" },
        { plant: "DW", value: "DW" },
        { plant: "PBA", value: "PBA" },
        { plant: "REF", value: "REF" },
        { plant: "W/M", value: "WM" },
      ],
    };
  },
  methods: {
    onFileSelected(event) {
      this.selectedFile = event;
    },
    async submit(event) {
      event.preventDefault();
      if (this.$refs.form.validate()) {
        let bodyFormData = new FormData();
        bodyFormData.append("plant", this.form.selectPlant);
        bodyFormData.append("spare_code", this.form.spareCode);
        bodyFormData.append("description", this.form.description);
        bodyFormData.append("price", this.form.price);
        bodyFormData.append("safe_stock", this.form.safeStock);
        bodyFormData.append("type", this.form.selectType);
        bodyFormData.append("reg_empno", "20528906");
        bodyFormData.append("file", this.selectedFile, this.selectedFile.name);
        await api.postITMold(bodyFormData);
      }
    },
  },
};
</script>

<style scoped></style>
