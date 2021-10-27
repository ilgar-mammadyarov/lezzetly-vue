<template>
  <div>
    <div v-if="cartMeals.length > 0">
      <v-simple-table>
        <template v-slot:default>
          <thead>
            <tr>
              <th class="text-left">Meal</th>
              <th class="text-left">Price</th>
              <th class="text-left">Quantity</th>
              <th class="text-left">Total</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(cartMeal, index) in cartMeals" :key="cartMeal.name">
              <td>{{ cartMeal.title }}</td>
              <td>{{ cartMeal.price }}</td>
              <td>
                <input
                  type="number"
                  min="0"
                  @keyup.enter="validateInput(index, $event)"
                  class="form-control text-center"
                  v-model="cartMeal.quantity"
                />
              </td>
              <td>${{ cartMeal.price * cartMeal.quantity }}</td>
              <td
                style="color: red; font-weight: bold"
                @click="deleteCartMeal(index)"
              >
                X
              </td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
      <h3>Total: {{ total }}</h3>
    </div>

    <h1 v-if="cartMeals.length < 1" style="color: red; cursor: pointer">
      You don't have any meal in cart.
    </h1>
  </div>
</template>

<script>
import CartService from "@/services/CartService.js";
export default {
  data() {
    return {
      cartMeals: [],
      total: 0,
    };
  },
  created() {
    //  CartService.cartItems.subscribe(data => {
    //    this.cartItemsCount = data.length;
    //  })
    this.cartMeals = CartService.getCartData();
    this.calculateTotal(this.cartMeals);
  },
  updated() {
    // console.log(CartService.cartItems.subscribe())
    CartService.cartItems.subscribe((data) => {
      //  console.log(data.length)
      this.cartMeals = data;
    });
  },
  methods: {
    validateInput(i, event) {
      const quantity = +event.target.value;
      if (quantity < 1) {
        event.target.value = this.cartMeals[i].quantity;
        return;
      }
      this.quantityUpdated(quantity, i);
    },
    quantityUpdated(qty, i) {
      this.cartMeals[i].quantity = qty;

      CartService.setCartData(this.cartMeals);
      this.calculateTotal(this.cartMeals);
    },
    calculateTotal(data) {
      let subs = 0;

      for (const item of data) {
        subs += item.price * item.quantity;
      }
      this.total = subs;
    },
    deleteCartMeal(i) {
      this.cartMeals.splice(i, 1);
      CartService.setCartData(this.cartMeals);
      this.calculateTotal(this.cartMeals);
    },
  },
};
</script>
