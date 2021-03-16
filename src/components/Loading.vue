<template>
  <v-overlay :value="start">
    <v-progress-circular
      :size="50"
      color="primary"
      indeterminate
    ></v-progress-circular>
  </v-overlay>
</template>

<script>
export default {
    props: ["start"]
};
</script>

<style></style>
