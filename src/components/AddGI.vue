<template>
  <v-container>
    <h2>GI Register</h2>
    <v-form>
      <v-text-field label="Spare Code * "> </v-text-field>
      <v-row>
        <v-col cols="4">
          <v-text-field label="Spare Type * "></v-text-field>
        </v-col>
        <v-col cols="1"></v-col>
        <v-col cols="5">
          <v-text-field label="Spare Name * "></v-text-field>
        </v-col>
      </v-row>
      <v-text-field label="Purpose * "> </v-text-field>
      <v-row>
        <v-col cols="5">
          <v-text-field label="GI Date * "></v-text-field>
        </v-col>
      </v-row>
      <v-text-field label="Qty * "></v-text-field>
      <v-select label="Location * "></v-select>
      <div class="text-right">
        <v-btn color="success" class="mt-5 pa-5 pr-9 pl-9" @click="submit">
          Submit
        </v-btn>
      </div>
      <h2>Register Infor</h2>
      <v-row>
        <v-col cols="3">
          <v-text-field label="Name">PA</v-text-field>
        </v-col>
        <v-col cols="1"></v-col>
        <v-col cols="3">
          <v-text-field label="EmpNo."></v-text-field>
        </v-col>
      </v-row>
    </v-form>
  </v-container>
</template>

<script>
export default {};
</script>

<style></style>
