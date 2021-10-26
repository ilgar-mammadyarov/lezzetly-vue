<template>
  <v-app>
    <NavBar />

    <v-main>
      <router-view :key="$route.fullPath" />
    </v-main>

    <Footer />
  </v-app>
</template>

<script>
import { mapGetters } from "vuex";
import NavBar from "./components/NavBar.vue";
import Footer from "./components/Footer.vue";
export default {
  name: "App",
  components: {
    NavBar,
    Footer,
  },
  computed: {
    ...mapGetters({
      isAuth: "auth/IS_AUTH",
    }),
  },
};
</script>
