<template>
  <div>
    <v-container>
      <v-row>
        <v-col class="list">
          <meal-card v-for="meal in meals" :key="meal.id" :meal="meal" />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import MealCard from "@/components/MealCard.vue";
export default {
  data() {
    return {
      id: 0,
      meals: [],
    };
  },
  components: {
    MealCard,
  },
  created() {
    this.id = this.$route.params.id;
    this.getMeals().then(({ data }) => {
      this.meals = data;
      this.meals = this.meals.filter(
        (meal) => meal.cook.id == this.$route.params.id
      );
      console.log(this.meals);
    });
  },
  methods: {
    ...mapActions({
      getMeals: "meal/fetchMeals",
    }),
  },
};
</script>

<style scoped>
.list {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 20px;
}
</style>
