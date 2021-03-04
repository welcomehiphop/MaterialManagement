<template>
  <v-container>
    <h2>Spare Part Detail</h2>
    <form>
      <div v-for="(list, index) in data_set" :key="index" class="mt-5">
        <v-select
          v-model="list.plant"
          :items="plants"
          item-text="plant"
          item-value="value"
          :key="index + 1"
          label="Plant *"
        />
        <v-text-field
          v-model="list.spare_code"
          :key="index + 2"
          label="Spare Code *"
        />
        <v-text-field
          v-model="list.description"
          :key="index + 3"
          label="Description *"
        />
        <v-text-field v-model="list.price" :key="index + 4" label="Price *" />
        <v-text-field
          v-model="list.safe_stock"
          :key="index + 5"
          label="Safe Stock *"
        />
        <v-select
          v-model="list.type"
          :items="types"
          item-text="type"
          item-value="value"
          :key="index + 6"
          label="Type *"
        />
 
        <input type="file" @change="onFileSelected" />
      </div>
      <div class="text-right">
        <v-btn
          color="success"
          class="mt-10 pa-5 pr-9 pl-9"
          @click="updateData()"
        >
          Update
        </v-btn>
      </div>
    </form>
  </v-container>
</template>

<script>
// import axios from "axios";
import api from "@/services/api";
export default {
  async mounted() {
    let result = await api.getITMoldByID(this.$route.params.id);
    this.data_set = result.data;
  },
  data() {
    return {
      data_set: [],
      types: [
        { type: "Select Type", value: "undefined" },
        { type: "Spare Part", value: "Spare Part" },
        { type: "Equipment", value: "Equipment" },
      ],
      plants: [
        { plant: "Select Plant", value: "undefined" },
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
    async updateData() {
      let bodyFormData = new FormData();
      bodyFormData.append("plant", this.data_set[0].plant);
      bodyFormData.append("spare_code", this.data_set[0].spare_code);
      bodyFormData.append("description", this.data_set[0].description);
      bodyFormData.append("price", this.data_set[0].price);
      bodyFormData.append("safe_stock", this.data_set[0].safe_stock);
      bodyFormData.append("type", this.data_set[0].type);
      bodyFormData.append("reg_empno", "20528906");
    
      if (this.selectedFile) {
        console.log(this.selectedFile);
        bodyFormData.append("file", this.selectedFile, this.selectedFile.name);
      }
      await api.putITMold(this.$route.params.id,bodyFormData)
    //   await axios
    //     .put(
    //       "http://localhost:3000/update_esrc_list/" +
    //         `${this.$route.params.id}`,
    //       bodyFormData,
    //       {
    //         headers: {
    //           "Content-Type": "multipart/form-data",
    //         },
    //       }
    //     )
    //     .then((resp) => {
    //       if (resp.status == "200") {
    //         alert("SUCCESS");
    //         this.$router.push({ path: "/locationdata" });
    //       }
    //     }).catch(err =>{
    //       alert(err)
    //     })
    },
  },
};
</script>

<style scoped></style>
