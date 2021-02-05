<template>
  <div>
    <v-btn @click="onClick()"></v-btn>
    {{ getApprover }}
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  data() {
    return {
      list: {
        name: "Pamorn Sirimak",
        department: "MIS",
      },
    };
  },
  methods: {
    ...mapMutations(["setApprover"]),
    onClick() {
      this.setApprover(this.list);
    },
  },
  computed: {
    ...mapGetters(["getApprover"]),
  },
};
</script>

<style></style>
