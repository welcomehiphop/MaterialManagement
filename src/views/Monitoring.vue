<template>
  <div class="monitoring">
    <v-container class="container">
      <h1>Monitoring</h1>
    </v-container>
    <v-container class="wrapper pa-10 mt-15">
      <v-row align="center" justify="center">
        <v-col>
          <div class="todos">
            <div class="todo" v-for="(item, index) in items" :key="index" @click="onClick(item.path)">
              <!-- <img src="../assets/add.png" width="100" height="100" alt="" /> -->
              <v-spacer class="mt-5"></v-spacer>
              {{ item.param }}
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  methods:{
    onClick(path){
       this.$router.push(path).catch(()=>{});
    }
  },
  data() {
    return {
      items: [
        { id: "1", param: "PPE Room", path: "/pperoom" },
        { id: "2", param: "Equipment", path: "/equipment" },
        { id: "3", param: "FE Room", path: "/feroom" },
      ],
    };
  },
};
</script>

<style scoped>
.todos {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2rem;
}
.todo {
  border: 1px solid black;
  background: white;
  padding: 5rem;
  border-radius: 5px;
  text-align: center;
  position: relative;
  cursor: pointer;
}
</style>
