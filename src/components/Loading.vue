<template>
    <v-overlay :value="start">
      <v-progress-circular
        color="primary"
        indeterminate
        :size="50"
      ></v-progress-circular>
    </v-overlay>
</template>

<script>
export default {
  props: ["start"],
};
</script>

<style></style>
