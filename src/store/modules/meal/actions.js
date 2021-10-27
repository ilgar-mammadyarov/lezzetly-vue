import MealService from "@/services/MealService";

export default {
  fetchMeals({ commit }) {
    return new Promise((resolve, reject) => {
      MealService.getMeals()
        .then((response) => {
          // commit(
          //   "SET_MEALS_TOTAL",
          //   parseInt(response.headers["x-total-count"])
          // );
          //console.log(response)
          commit("SET_MEALS", response.data);
          resolve(response);
        })
        .catch((error) => {
          console.log(error);
          reject(error);
        });
    });
  },
  fetchMeal({ commit }, id) {
    return MealService.getMeal(id).then((response) => {
      commit("SET_MEAL", response.data);
      return response.data;
    });
    //   if (id == state.event.id) {
    //     return state.event
    //   }

    //   var event = getters.getEventById(id)

    //   if (event) {
    //     commit('SET_EVENT', event)
    //     return event
    //   } else {
    //     return EventService.getEvent(id).then(response => {
    //       commit('SET_EVENT', response.data)
    //       return response.data
    //     })
    //   }
  },
  fetchSearchedMeals({ commit }, searchStr) {
    return new Promise((resolve, reject) => {
      MealService.getSearchedMeals(searchStr)
        .then((response) => {
          // commit(
          //   "SET_MEALS_TOTAL",
          //   parseInt(response.headers["x-total-count"])
          // );
          console.log(response);
          commit("SET_MEALS", response.data);
          resolve(response);
        })
        .catch((error) => {
          console.log(error);
          reject(error);
        });
    });
  },
  fetchMealCategories({ commit }) {
    return new Promise((resolve, reject) => {
      MealService.getMealCategories()
        .then((response) => {
          if (response.data) {
            response.data.push({
              id: 0,
              title: "All",
            });

            response.data.sort((a, b) => {
              return a.id - b.id;
            });
          }

          commit("SET_MEAL_CATEGORIES", response);
          resolve(response);
        })
        .catch((error) => {
          console.log(error);
          reject(error);
        });
    });
  },
  fetchMealOptions({ commit }) {
    return new Promise((resolve, reject) => {
      MealService.getMealOptions()
        .then((response) => {
          if (response.data) {
            response.data.push({
              id: 0,
              title: "All",
            });

            response.data.sort((a, b) => {
              return a.id - b.id;
            });
          }

          commit("SET_MEAL_OPTIONS", response);
          resolve(response);
        })
        .catch((error) => {
          console.log(error);
          reject(error);
        });
    });
  },
};
