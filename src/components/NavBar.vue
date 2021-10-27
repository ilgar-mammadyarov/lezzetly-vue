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
      <v-icon>mdi-cart-outline</v-icon> -
      <span style="color: white">{{ cartItemsCount }}</span>
    </router-link>
  </v-app-bar>
</template>

<script>
import CartService from "@/services/CartService.js";
// import Observable from "rxjs";
export default {
  data() {
    return {
      cartItemsCount: 0,
    };
  },
  methods: {},
  created() {
    // console.log(CartService.cartItems.subscribe())
    //CartService.getCartData();
    CartService.cartItems.subscribe((data) => {
      if (data) {
        this.cartItemsCount = data.length;
      }
    });
    if (CartService.getCartData()) {
      this.cartItemsCount = CartService.getCartData().length;
    }
  },
  // updated () {
  //   // console.log(CartService.cartItems.subscribe())
  //    CartService.cartItems.subscribe(data => {
  //     //  console.log(data.length)
  //      this.cartItemsCount = data.length;
  //    })
  // }
};
</script>
