<template>
  <v-app>
    <Header/>
    <!-- <Menu/> -->
    <Content/>
    <Footer />
  </v-app>
</template>

<script>

import Header from "./components/Main/Header";
import Footer from "./components/Main/Footer.vue";
import Content from './components/Main/Content.vue';
// import Menu from './components/Main/Menu.vue';

export default {

  // components: { Header, Footer, Content, Menu },
  components: { Header, Footer, Content },

  name: "App",

  data: () => ({}),
};
</script>
