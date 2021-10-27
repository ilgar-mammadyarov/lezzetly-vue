<template>
  <v-container>
    <v-row>
      <v-col md="4"> </v-col>
      <v-col md="4">
        <validation-observer ref="observer" v-slot="{ invalid }">
          <form @submit.prevent="submit">
            <validation-provider
              v-slot="{ errors }"
              name="Name"
              rules="required|max:10"
            >
              <v-text-field
                v-model="loginModel.username"
                :counter="10"
                :error-messages="errors"
                label="Name"
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
                v-model="loginModel.password"
                :counter="10"
                :error-messages="errors"
                label="Password"
                required
              ></v-text-field>
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
    loginModel: {
      username: "",
      password: "",
    },
  }),

  methods: {
    submit() {
      this.postLogin(JSON.parse(JSON.stringify(this.loginModel))).then(
        (response) => {
          console.log(response);
        }
      );
    },
    clear() {
      this.loginModel.username = "";
      this.loginModel.password = "";
      this.$refs.observer.reset();
    },
    ...mapActions({
      postLogin: "auth/postLogin",
    }),
  },
};
</script>
