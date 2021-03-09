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
        :rules="[(v) => !!v || 'Plant is required']"
        persistent-hint
        required
      ></v-select>

      <v-text-field
        v-model="form.spareCode"
        :counter="20"
        label="Spare Code *"
        :rules="[(v) => !!v || 'Spare code is required']"
        required
      ></v-text-field>

      <v-text-field
        v-model="form.description"
        label="Description *"
        :rules="[(v) => !!v || 'Description is required']"
        required
      ></v-text-field>

      <v-text-field
        v-model="form.price"
        label="Price *"
        :rules="[(v) => !!v || 'Price is required']"
        required
      ></v-text-field>

      <v-text-field
        v-model="form.safeStock"
        label="Safe Stock *"
        :rules="[(v) => !!v || 'Safe stock is required']"
        required
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
        :rules="[(v) => !!v || 'Type is required']"
        persistent-hint
        required
      ></v-select>
      <!-- <v-file-input truncate-length="15" @click="onFileSelected"></v-file-input> -->

      <!-- <input
        class="mx-15"
        type="file"
        @change="onFileSelected"
        :rules="[(v) => !!v || 'Please upload image']"
      /> -->
      <v-file-input
        dense
        label="File input"
        filled
        @change="onFileSelected"
        :rules="[(v) => !!v || 'Please upload image']"
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
      valid: true,
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
      this.selectedFile = event
    },
    async submit(event) {
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
        await api.postEsrcData(bodyFormData);
      }
      event.preventDefault();
    },
  },
};
</script>

<style scoped></style>
