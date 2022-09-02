<template>
  <v-container class="my-xs-0 my-16-md fill-height">
    <v-row>
      <v-col
        justify="center"
        align="center"
      >
        <div class="text-left text-h5 text-grey-lighten-1 text-uppercase font-weight-bold mt-5">
          Inicio de Sesión
        </div>
      </v-col>
    </v-row>

    <v-row>
      <v-col
        justify="center"
        align="center"
      >
        <v-avatar
          color="grey"
          size="150"
          class="mb-5"
        >
          <span class="text-white text-h3 font-weight-bold">
            RIN
          </span>
        </v-avatar>
        <div class="text-white text-h4 font-weight-bold my-2">
          Colegio de Notarios
        </div>
        <div class="text-grey-lighten-1 text-h5 font-weight-bold">
          Ciudad de México
        </div>
      </v-col>
    </v-row>

    <v-row>
      <v-col
        justify="center"
        align="center"
        class="mx-auto"
        xs="12"
        sm="8"
        md="6"
        lg="5"
        xl="4"
      >
        <div class="rounded bg-white mt-5 py-8 px-15">
          <v-form
            v-model="form"
            @submit.prevent="onSubmit"
          >
            <v-text-field
              v-model="email"
              :readonly="loading"
              :rules="[required]"
              clearable
              autofocus
              variant="solo"
              bg-color="grey-lighten-1"
              class="mb-2"
              label="Usuario"
              prepend-inner-icon="mdi-account"
            ></v-text-field>

            <v-text-field
              v-model="password"
              :readonly="loading"
              :rules="[required]"
              clearable
              variant="solo"
              bg-color="grey-lighten-1"
              type="password"
              label="Contraseña"
              prepend-inner-icon="mdi-lock"
              placeholder="Ingresa tu contraseña"
            ></v-text-field>

            <br>

            <v-btn
              :disabled="!form"
              :loading="loading"
              block
              color="#228E8C"
              size="large"
              type="submit"
              variant="elevated"
              theme="dark"
            >
              Iniciar Sesión
            </v-btn>
          </v-form>

          <div class="font-weight-bold text-uppercase text-right mt-5">
            <a href="#" class="text-decoration-none text-grey-darken-1">
              Recuperar contraseña
            </a> 
          </div>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
// @ is an alias to /src

export default {
  components: {
  },
  name:"Login-Page",
  data () {
    return {
      form: false,
      email: null,
      password: null,
      loading: false,
    }
  },
  methods: {
    onSubmit() {
      if (!this.form) return;
      this.loading = true
      setTimeout(() =>{
        this.loading = false
        this.$router.push(`/home`)
      }, 2000)
    },
    required(v) {
      return !!v || 'Campo requerido'
    },
  },
};
</script>

<style>
.v-field--variant-solo{
  box-shadow: 0px 0px 0px 0px rgb(0 0 0 / 20%), 0px 0px 0px 0px rgb(0 0 0 / 14%), 0px 0px 0px 0px rgb(0 0 0 / 12%) !important;
}
</style>