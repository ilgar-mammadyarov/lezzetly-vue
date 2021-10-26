<template>
  <v-app-bar app color="primary" dark>
    <div class="d-flex align-center">
      <router-link
        :to="{ name: 'Home' }"
        style="color: white; text-decoration: none; margin-right: 10px"
        >LEZZETLY</router-link
      >
      <v-btn exact-path :to="{ name: 'Home' }" text>Home</v-btn>
      <v-btn :to="{ name: 'Login' }" text>Login</v-btn>
      <v-btn :to="{ name: 'Register' }" text>Register</v-btn>
    </div>

    <v-spacer></v-spacer>

    <router-link :to="{ name: 'Cart' }">
      <v-icon>mdi-cart-outline</v-icon>
    </router-link>
  </v-app-bar>
</template>
