<template>
  <div>
    <v-card
      :loading="loading"
      class="mx-auto my-12"
      max-width="374"
      @dblclick="openModal()"
    >
      <template slot="progress">
        <v-progress-linear
          color="deep-purple"
          height="10"
          indeterminate
        ></v-progress-linear>
      </template>

      <v-img
        height="250"
        src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
      ></v-img>

      <v-card-title>{{ meal.title }}</v-card-title>

      <v-card-text>
        <v-row align="center" class="mx-0">
          <v-rating
            :value="3"
            color="amber"
            dense
            half-increments
            readonly
            size="14"
          ></v-rating>

          <div class="grey--text ms-4">
            {{ meal.cook.rating }}
          </div>
        </v-row>

        <div class="my-4 text-subtitle-1">
          ${{ meal.price }} • {{ meal.cook.first_name }} •
          {{ meal.stock_quantity }} LEFT
        </div>

        <div>
          Small plates, salads & sandwiches - an intimate setting with 12 indoor
          seats plus patio seating.
        </div>
      </v-card-text>

      <v-divider class="mx-4"></v-divider>

      <!-- <v-card-title>Tonight's availability</v-card-title> -->

      <!-- <v-card-text>
      <v-chip-group
        v-model="selection"
        active-class="deep-purple accent-4 white--text"
        column
      >
        <v-chip>5:30PM</v-chip>

        <v-chip>7:30PM</v-chip>

        <v-chip>8:00PM</v-chip>

        <v-chip>9:00PM</v-chip>
      </v-chip-group>
    </v-card-text> -->

      <v-card-actions>
        <router-link :to="{ name: 'Cook', params: { id: meal.cook.id } }">
          <v-btn color="deep-purple lighten-2" text> View </v-btn>
        </router-link>

        <v-btn color="deep-purple lighten-2" text> Rate </v-btn>
        <v-btn> </v-btn>
      </v-card-actions>
    </v-card>

    <!-- Modal section below -->
    <v-row justify="center">
      <v-dialog v-model="dialog" persistent max-width="400">
        <!-- <template v-slot:activator="{ on, attrs }">
          <v-btn color="primary" dark v-bind="attrs" v-on="on">
            Open Dialog
          </v-btn>
        </template> -->
        <v-card>
          <v-card-title class="text-h5">
            {{ meal.title }}
          </v-card-title>
          <v-card-subtitle>
            {{ meal.is_active }}
          </v-card-subtitle>
          <v-card-text>{{ meal.stock_quantity }}</v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <!-- <v-btn color="green darken-1" text @click="dialog = false">
              Disagree
            </v-btn> -->
            <v-btn color="green darken-1" text @click="dialog = false">
              Close
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
  </div>
</template>

<script>
export default {
  props: {
    meal: Object,
  },
  data: () => ({
    loading: false,
    selection: 1,
    dialog: false,
  }),

  methods: {
    // reserve() {
    //   this.loading = true;

    //   setTimeout(() => (this.loading = false), 2000);
    // },
    goToCook(id) {
      console.log(id);
    },
    openModal() {
      this.dialog = true;
      console.log(this.meal);
    },
  },
};
</script>
