<template>
  <div>
    <v-container>
      <v-row>
        <v-col>
          <v-col class="list">
            <v-text-field
              @keyup.enter="onSearch(searchStr)"
              color="white"
              label="Search"
              v-model="searchStr"
            ></v-text-field>
            <v-autocomplete
              v-model="categoryTitle"
              :items="mealCategories"
              item-text="title"
              item-value="title"
              label="Category"
            ></v-autocomplete>

            <v-autocomplete
              v-model="optionTitle"
              :items="mealOptions"
              item-text="title"
              item-value="title"
              label="Option"
            ></v-autocomplete>
          </v-col>
        </v-col>
      </v-row>
      <v-row>
        <v-col class="list">
          <meal-card v-for="meal in meals" :key="meal.id" :meal="meal" />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import MealCard from "@/components/MealCard.vue";
// import MealCardModal from "@/components/MealCardModal.vue";
import { mapActions } from "vuex";
export default {
  name: "Home",
  data() {
    return {
      categoryTitle: null,
      optionTitle: null,
      meals: [],
      mealCategories: [],
      categoryTitles: [],
      optionTitles: [],
      // selectedMealCategory: "",
      selectedMeal: {},
      mealOptions: [],
      searchStr: "",
      dialog: false,
    };
  },

  watch: {
    categoryTitle: function (value) {
      if (value === "All") return this.onSearch("");
      this.onSearch(value);
    },
    optionTitle: function (value) {
      if (value === "All") return this.onSearch("");
      this.onSearch(value);
    },
  },
  created() {
    this.getMeals().then(({ data }) => {
      this.meals = data;
      // console.log(data);
    });
    this.getMealCategories().then(({ data }) => {
      this.mealCategories = data;
    });
    this.getMealOptions().then(({ data }) => {
      this.mealOptions = data;
      // console.log(data);
    });
  },

  components: {
    MealCard,
    // MealCardModal,
  },
  methods: {
    ...mapActions({
      getMeals: "meal/fetchMeals",
      getSearchedMeals: "meal/fetchSearchedMeals",
      getMealCategories: "meal/fetchMealCategories",
      getMealOptions: "meal/fetchMealOptions",
    }),
    onSearch(searchStr) {
      this.getSearchedMeals(searchStr).then(({ data }) => {
        this.meals = data;
        // console.log(data);
      });
    },
    openModal(meal) {
      console.log("hello");
      this.dialog = true;
      this.selectedMeal = meal;
      console.log(this.selectedMeal);
    },
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
