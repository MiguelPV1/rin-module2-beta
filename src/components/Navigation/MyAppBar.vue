<template>
  <v-toolbar
    color="#00356D"
    elevate-on-scroll
    theme="dark"
    flat
  >
    <template v-slot:prepend>
      <v-app-bar-nav-icon @click="displayNavbar"/>
    </template>

    <v-toolbar-title class="font-weight-bold">
      <v-icon>mdi-server</v-icon>
      :QA/
      <v-icon size="small">mdi-account</v-icon>
      :CAMC700205HDFTRR04
    </v-toolbar-title>

    <v-spacer />

    <div class="d-flex justify-around align-center mr-5-xs mr-10">
      <v-btn
        fab
        icon
        variant="flat"
        color="#228E8C"
      >
        <v-icon theme="dark">
          mdi-lightbulb-on
        </v-icon>
      </v-btn>

      <div
        class="rounded pa-4 mx-4 text-center font-weight-bold"
        style="background-color: #1F1F32"
      >
        Notaria 51
      </div>

      <v-menu
        transition="slide-y-transition"
      >
        <template v-slot:activator="{ props }">
          <v-btn
            icon
            v-bind="props"
          >
            <v-avatar
              color="accent"
              size="55"
            >
              <v-img
                src="https://cdn.vuetifyjs.com/images/john.jpg"
                alt="John"
              />
            </v-avatar>
          </v-btn>
        </template>

        <v-list>
          <v-list-item
            @click="logout"
          >
            <v-list-item-title>Cerrar Sesión</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </div>
  </v-toolbar>
</template>

<script>
// @ is an alias to /src

export default {
  name:"MyAppBar",
  props:{
    openNavbar: Boolean,
  },
  components: {
  },
  data () {
    return {
      stateNavbar: this.openNavbar,
    }
  },
  methods: {
    logout (){
      console.log('Cerrar sesión')
      this.$router.push(`/`)
    },
    displayNavbar() {
      this.stateNavbar = !this.stateNavbar
      this.$emit('navbar', this.stateNavbar)
    },
  },
};
</script>

<style scoped>
</style>