<template>
  <v-container>
    <h2>Spare Part Register</h2>

    <v-form>
      <v-select
        v-model="form.selectPlant"
        :items="plants"
        item-text="plant"
        item-value="value"
        label="Plant *"
        persistent-hint
        single-line
        required
      ></v-select>

      <v-text-field
        v-model="form.spareCode"
        :counter="20"
        label="Spare Code *"
        required
      ></v-text-field>

      <v-text-field
        v-model="form.description"
        label="Description *"
        required
      ></v-text-field>

      <v-text-field v-model="form.price" label="Price *" required></v-text-field>

      <v-text-field
        v-model="form.safeStock"
        label="Safe Stock *"
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
        persistent-hint
        single-line
        required
      ></v-select>
      <!-- <v-file-input truncate-length="15" @click="onFileSelected"></v-file-input> -->

      <input class="mx-15" type="file" @change="onFileSelected" />

      <div class="text-right">

        <v-btn color="success" class="mt-10 pa-5 pr-9 pl-9" @click="submit">
          Submit
        </v-btn>
      </div>
    </v-form>
  </v-container>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      form: {
        selectPlant: {plant:"Select Plant",value:""},
        spareCode: "",
        selectType: {type:"Select Type",value:""},
        price: "",
        safeStock: "",
        description: "",
        reg_empno:"",
      },
      types: [
        {type:"Select Type",value:""},
        { type: "Spare Part", value: "Spare Part" },
        { type: "Equipment", value: "Equipment" },
      ],
      plants: [
        {plant:"Select Plant",value:""},
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
      this.selectedFile = event.target.files[0];
    },
    async submit(event) {
      event.preventDefault();
      // if (this.form.empNo == "") {
      //   console.log(1);
      //   alert("Please input all field.");
      // } else if (this.form.action == "") {
      //   console.log(2);
      //   alert("Please input all field.");
      // } else if (this.selectedFile == null) {
      //   console.log(3);
      //   alert("Please upload image.");
      // } else {
      let bodyFormData = new FormData();
      bodyFormData.append("plant", this.form.selectPlant.value);
      bodyFormData.append("spare_code", this.form.spareCode);
      bodyFormData.append("description", this.form.description);
      bodyFormData.append("price", this.form.price);
      bodyFormData.append("safe_stock", this.form.safeStock);
      bodyFormData.append("type", this.form.selectType.value);
      bodyFormData.append("reg_empno","20528906")
      // bodyFormData.append("action", this.form.action);
      // bodyFormData.append("dateAndTime", this.timestamp);
      // bodyFormData.append("status", "Finish");
      bodyFormData.append("file", this.selectedFile, this.selectedFile.name);

      await axios
        .post("http://localhost:3000/post_esrc_list", bodyFormData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((resp) => {
          if (resp.status == "200") {
            alert("SUCCESS");
            this.$router.push({ path:'/molddata' });
          }
        });
      
      // }
    },
  },
};
</script>

<style scoped></style>
