<template>
  <v-container>
    <v-row>
      <v-col md="4"> </v-col>
      <v-col md="4">
        <validation-observer ref="observer" v-slot="{ invalid }">
          <form @submit.prevent="submit">
            <validation-provider
              v-slot="{ errors }"
              name="Username"
              rules="required|max:10"
            >
              <v-text-field
                v-model="registerModel.username"
                :counter="10"
                :error-messages="errors"
                label="Username"
                required
              ></v-text-field>
            </validation-provider>

            <validation-provider
              v-slot="{ errors }"
              name="Password"
              rules="required|max:10"
            >
              <v-text-field
                type="password"
                v-model="registerModel.password"
                :counter="10"
                :error-messages="errors"
                label="Password"
                required
              ></v-text-field>
            </validation-provider>

            <validation-provider
              v-slot="{ errors }"
              name="select"
              rules="required"
            >
              <v-select
                v-model="registerModel.select"
                :items="items"
                :error-messages="errors"
                item-text="name"
                item-value="id"
                label="Select"
                data-vv-name="select"
                required
              ></v-select>
            </validation-provider>

            <v-btn class="mr-4" type="submit" :disabled="invalid">
              submit
            </v-btn>
            <v-btn @click="clear"> clear </v-btn>
          </form>
        </validation-observer>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { required, max, regex } from "vee-validate/dist/rules";
import {
  extend,
  ValidationObserver,
  ValidationProvider,
  setInteractionMode,
} from "vee-validate";
import { mapActions } from "vuex";

setInteractionMode("eager");

extend("required", {
  ...required,
  message: "{_field_} can not be empty",
});

extend("max", {
  ...max,
  message: "{_field_} may not be greater than {length} characters",
});

extend("regex", {
  ...regex,
  message: "{_field_} {_value_} does not match {regex}",
});

export default {
  components: {
    ValidationProvider,
    ValidationObserver,
  },
  data: () => ({
    registerModel: {
      username: "",
      password: "",
      select: null,
    },

    items: [
      { name: "Cook", id: 1 },
      { name: "Courier", id: 2 },
      { name: "User", id: 3 },
    ],
  }),

  methods: {
    submit() {
      this.$refs.observer.validate();
      //console.log(this.registerModel)
      this.postRegister(JSON.parse(JSON.stringify(this.registerModel))).then(
        (response) => {
          console.log(response);
        }
      );
    },
    clear() {
      this.registerModel.username = "";
      this.registerModel.password = "";
      this.registerModel.select = null;
      this.$refs.observer.reset();
    },
    ...mapActions({
      postRegister: "auth/postRegister",
    }),
  },
};
</script>
